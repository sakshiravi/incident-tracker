import React from 'react';

function IncidentList({ incidents }) {
  return (
    <div className="incident-list">
      <h2> Incident List</h2>
      {incidents.length === 0 ? (
        <p>No incidents reported yet.</p>
      ) : (
        <ul>
          {incidents.map((incident, index) => (
            <li key={index} className="incident-card">
              <div className="incident-title">{incident.title}</div>
              <div className="incident-type">{incident.type}</div>
              <div className="incident-description">{incident.description}</div>
              <div className="incident-time">
                🕒 {new Date(incident.time).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IncidentList;
