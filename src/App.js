import React, { useState, useEffect } from 'react';
import AddIncident from './components/AddIncident';
import IncidentList from './components/IncidentList';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState(() => {
    const saved = localStorage.getItem("incidents");
    return saved ? JSON.parse(saved) : [];
  });

  const addIncident = (incident) => {
    const newList = [...incidents, incident];
    setIncidents(newList);
    localStorage.setItem("incidents", JSON.stringify(newList));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1> Real-Time Incident Tracker</h1>
      <AddIncident onAdd={addIncident} />
      <IncidentList incidents={incidents} />
    </div>
  );
}

export default App;
