"use client";
import Nota from '../notaComponent/nota';
import { useEffect, useState } from 'react';
import { getNotas } from '../../api/api';
const ListaNotas = () => {
  type Nota1 = {
    id: number;
    title: string;
    content: string;
  };

  const [notas, setNotas] = useState<Nota1[]>([]);
  useEffect(() => {
    const getNotasData = async () => {
      const notas = await getNotas();
      setNotas(notas as Nota1[]);
    };
    getNotasData();
  }, []);

  return (
    <>
      <div>
        {notas.map((nota) => (
          <Nota title={nota.title} content={nota.content} />
        ))}
      </div>
    </>
  )
};

export default ListaNotas;
