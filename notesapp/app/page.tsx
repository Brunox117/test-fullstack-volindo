import Nota from "./components/notaComponent/nota"

export default async function Home() {
  return (
    <>
    <div>
      <Nota title="Nota 1" content="Contenido de la nota 1" />
      <Nota title="Nota 2" content="Contenido de la nota 2" />
    </div>
    </>
  )
}
