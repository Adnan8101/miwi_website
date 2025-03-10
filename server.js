const express = require('express');
const app = express();
const initialPort = 3000;

function startServer(port) {
    app.listen(port, (err) => {
        if (err) {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${port} is in use, trying next port...`);
                startServer(port + 1);
            } else {
                console.error('Error starting server:', err);
            }
        } else {
            console.log(`Server started on port ${port}`);
        }
    });
}

// ...existing code...

startServer(initialPort);

// ...existing code...
