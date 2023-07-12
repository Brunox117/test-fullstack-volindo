"use client"
import '../../crearNota/crearNota.css'
import { getNota, editarNotas, getNotas } from "@/app/api/api";
import { get } from "http";
import { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { useRouter } from "next/navigation";
type NotaProps = {
  id: number;
  title: string;
  content: string;
};
const EditarNota = ({ params }) => {
  const [titleOriginal, setTitleOriginal] = useState('');
  const miArray: Array<string> = ["string1", "string2", "string3"];
  const titulos: Array<string> = [];
  const [notas, setNotas] = useState<NotaProps[]>([]);
  useEffect(() => {
    const getNotasData = async () => {
      const notas = await getNotas();
      setNotas(notas as NotaProps[]);
    };
    getNotasData();
  }, []);
  for (let i = 0; i < notas.length; i++) {
    titulos.push(notas[i].title);
  }
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
            setTitleOriginal(nota.title);
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
        if(titulos.includes(title) && title != titleOriginal){
          alert('Los títulos de las notas deben ser únicos');
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