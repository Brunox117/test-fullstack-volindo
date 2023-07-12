"use client"
import '../../crearNota/crearNota.css'
import { getNota, editarNotas } from "@/app/api/api";
import { get } from "http";
import { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { useRouter } from "next/navigation";
const EditarNota = ({ params }) => {
    const id = params.id;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContenidoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };
    const [nota, setNota] = useState(null);
    useEffect(() => {
        const getNotaData = async () => {
            const nota = await getNota(id);
            setNota(nota);
            setTitle(nota.title);
            setContent(nota.content);
        };

        getNotaData();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (title.length < 1 || title.length > 100) {
          alert('El título debe tener entre 1 y 100 palabras');
          return;
        }
        if (content.length < 1 || content.length > 1000) {
          alert('El contenido debe tener entre 1 y 1000 palabras');
          return;
        }
        try {
          title.toString();
          content.toString();
          editarNotas(id,title, content);
        }
        catch (error) {
          console.log(error);
        }
        alert('Nota actualizada');
        setTitle('');
        setContent('');
        router.push('/');
      };


    return (
        <div>
            <p className='instrucciones'>Ingrese el título y contenido de la nota</p>
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
        <button type="submit" className='formulario button'>Editar</button>
      </form>
      </div>
        </div>
    );
};

export default EditarNota;