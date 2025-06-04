export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from ' + 'apptester' + ' API!',
    timestamp: new Date().toISOString(),
    method: req.method,
    app: 'apptester'
  })
}