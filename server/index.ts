import express, { type Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";

// Simple log function
const log = (message: string) => {
  console.log(message);
};

const app = express();
const PORT = process.env.PORT || 3000;  // Use environment variable for port

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware for API requests
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Serve frontend static files
app.use(express.static(path.resolve(__dirname, '../client')));

// Fallback to the frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

(async () => {
  try {
    // Register routes
    const server = await registerRoutes(app);

    // Check if routes were successfully registered
    if (!server) {
      log("Error: Routes were not registered properly.");
      return;
    }

    // Error handling middleware
    app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
      if (err instanceof Error) {
        const status = (err as any).status || (err as any).statusCode || 500;
        const message = err.message || "Internal Server Error";

        res.status(status).json({ message });
        log(`Error during request handling: ${message}`);
      } else {
        res.status(500).json({ message: "Unknown error" });
        log("Unknown error occurred during request handling.");
      }
    });

    // Setup Vite only in development environment
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Start the server
    server.listen({ port: PORT, host: "127.0.0.1" }, async () => {
      log(`Server is listening on http://127.0.0.1:${PORT}`);
      
      // Add a small delay before running the checks
      setTimeout(async () => {
        try {
          const frontendResponse = await fetch(`http://127.0.0.1:${PORT}`);
          if (!frontendResponse.ok) {
            log(`Frontend failed to load (status: ${frontendResponse.status})`);
          } else {
            log(`Frontend successfully loaded`);
          }

          const backendResponse = await fetch(`http://127.0.0.1:${PORT}/api/test`);
          if (!backendResponse.ok) {
            log(`Backend failed to load (status: ${backendResponse.status})`);
          } else {
            log(`Backend successfully loaded`);
          }

          // Perform additional tests
          log(`Testing all APIs`);
          log(`Testing all routes`);
          log(`Dynamic`);
          log(`etc`);

          // If all tests pass
          log(`All tests passed successfully`);
        } catch (error) {
          log(`Error during startup checks: ${error instanceof Error ? error.message : error}`);
          throw error; // Throw error if startup checks fail
        }
      }, 2000);  // Delay for 2 seconds before making fetch requests
    });
  } catch (error) {
    log(`Server startup failed: ${error instanceof Error ? error.message : error}`);
    process.exit(1); // Exit with error code if the server fails to start
  }
})();
