const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const client = require('prom-client');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Prometheus Metrics
const register = client.register;
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics(); // Default system metrics

const incidentCounter = new client.Counter({
  name: 'incident_total',
  help: 'Total number of incidents added'
});

// Route to handle incoming incident
app.post('/incident', (req, res) => {
  const { title, description } = req.body;
  console.log("📥 New incident received:", title);

  // Increment the Prometheus metric
  incidentCounter.inc();

  // Send response
  res.status(201).json({ message: "Incident added" });
});

// Route to expose Prometheus metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Health check (optional)
app.get('/health', (req, res) => res.send("Backend is alive"));

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
