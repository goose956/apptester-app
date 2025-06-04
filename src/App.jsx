import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    // Fetch data from API route
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.log('API call failed:', err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apptester Application</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>This is a full-stack React app deployed on Vercel</p>
          {apiData && (
            <div className="api-response">
              <h3>API Response:</h3>
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App