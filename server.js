const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const initialPort = process.env.PORT || 3000; // Change to a different port

app.get('/', (req, res) => {
  res.send('Hello World!');
});

function startServer(port) {
  app.listen(port, '127.0.0.1', (err) => { // Change to 127.0.0.1
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

startServer(initialPort);
