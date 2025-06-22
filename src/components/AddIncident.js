import React, { useState } from 'react';

function AddIncident({ onAdd }) {
  const [incident, setIncident] = useState({
    title: '',
    type: '',
    description: '',
    time: ''
  });

  const handleChange = (e) => {
    setIncident({ ...incident, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(incident);
    setIncident({ title: '', type: '', description: '', time: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Incident Title"
        value={incident.title}
        onChange={handleChange}
        required
      />
      <input
        name="type"
        placeholder="Type (e.g., Critical)"
        value={incident.type}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={incident.description}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="time"
        value={incident.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Incident</button>
    </form>
  );
}

export default AddIncident;
