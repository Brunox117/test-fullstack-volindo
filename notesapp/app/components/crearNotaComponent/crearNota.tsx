import React, { useState, useEffect } from 'react';

const CrearNota = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  const handleContenidoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContenido(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validar la longitud del título y contenido
    if (titulo.length < 1 || titulo.length > 100) {
      console.log('El título debe tener entre 1 y 100 palabras');
      return;
    }
    if (contenido.length < 1 || contenido.length > 1000) {
      console.log('El contenido debe tener entre 1 y 1000 palabras');
      return;
    }
    // Lógica para crear la nota con el título y contenido ingresados
    // ...
    console.log('Nota creada:', { titulo, contenido });
    // Reiniciar los campos del formulario
    setTitulo('');
    setContenido('');
  };

  return (
    <div>
      <h1>Crear nota</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={handleTituloChange}
          />
        </div>
        <div>
          <label htmlFor="contenido">Contenido:</label>
          <textarea
            id="contenido"
            value={contenido}
            onChange={handleContenidoChange}
          ></textarea>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearNota;
