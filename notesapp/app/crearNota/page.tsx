"use client"
import './crearNota.css'
import React, { useState } from 'react';

const CrearNota = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContenidoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.length < 1 || title.length > 100) {
      alert('El título debe tener entre 1 y 100 palabras');
      return;
    }
    if (content.length < 1 || content.length > 1000) {
      alert('El contenido debe tener entre 1 y 1000 palabras');
      return;
    }
    // Lógica para crear la nota con el título y contenido ingresados
    // ...
    alert('Nota creada');
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>Crear nota</h1>
      <p>Ingrese el título y contenido de la nota</p>
      <div className='card'>
      <form onSubmit={handleSubmit} className='formulario'>
        <div>
          <label htmlFor="titulo" className='formulario label'>Título:</label>
          <input
            type="text"
            id="titulo"
            value={title}
            onChange={handleTituloChange}
            className='formulario input'
          />
        </div>
        <div>
          <label htmlFor="contenido" className='formulario label'>Contenido:</label>
          <textarea
            id="contenido"
            value={content}
            onChange={handleContenidoChange}
            className='formulario textarea'
          ></textarea>
        </div>
        <button type="submit" className='formulario button'>Crear</button>
      </form>
      </div>
    </div>
  );
};

export default CrearNota;

