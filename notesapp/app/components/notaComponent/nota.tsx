import './nota.css'
import { borrarNotas } from '@/app/api/api';

import Link from 'next/link';
type NotaProps = {
    id: number;
    title: string;
    content: string;
};
const Nota = ({ id, title, content }: NotaProps) => {
    
    const handleBorrarNota = async () => {
        const confirmacion = confirm('¿Estás seguro que quieres eliminar la nota?');
        if (!confirmacion) return;
        try {
            await borrarNotas(id);
        } catch (error) {
            console.log(error);
        };
        alert('Nota eliminada');
        window.location.reload();
    };
    return (
        <div className="note">
            <h3 className='title'>{title}</h3>
            <p className='content'>{content}</p>
            <div>
                <Link href={`/editarNota/${id}`}>
                    <button className='button button-editar'>Editar</button>
                </Link>
                <button className='button button-eliminar' onClick={() => handleBorrarNota()}>Eliminar</button>
            </div>
        </div>
    );
};

export default Nota;
