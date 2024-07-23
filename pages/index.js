import React, { useState } from 'react';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  // Función para agregar una nota
  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  // Función para eliminar la última nota
  const removeLastNote = () => {
    setNotes(notes.slice(0, -1));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Notas</h1>
      <input
        type="text"
        placeholder="Agregar una nota"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={addNote} style={{ marginRight: '10px' }}>Agregar Nota</button>
      <button onClick={removeLastNote}>Eliminar Última Nota</button>
      <ul>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))
        ) : (
          <li>No hay notas.</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
