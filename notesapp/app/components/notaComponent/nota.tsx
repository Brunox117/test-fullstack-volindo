import './nota.css'
type NotaProps = {
    title: string;
    content: string;
};
const Nota = ({ title, content }: NotaProps) => {
    return(
        <div className="note">
            <h3 className='title'>{title}</h3>
            <p className='content'>{content}</p>
            <div>
                <button className='button button-editar'>Editar</button>
                <button className='button button-eliminar'>Eliminar</button>
            </div>
        </div>
    );
};

export default Nota;
