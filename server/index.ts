import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'DLS Envirotech Server is running!', timestamp: new Date().toISOString() });
});

// Handle React routing - send all non-API requests to React app
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api') && !req.path.includes('.')) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  } else {
    next();
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 DLS Envirotech server running at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});