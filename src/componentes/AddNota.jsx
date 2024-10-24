import { useState } from "react"; //useState para manejar el texto de la nota que se va agregar
import '../hojas-de-estilo/AddNota.css';

export default function AddNota ({ onAddNota }) {
    const [text, setText] = useState('');

    const handleAddNota = () => { //se verifica que el texto no este vacío y llama a onAddNota y restablece el estado de text
        if(text.trim() === '') return;
        onAddNota(text);
        setText('');
    };

    return (
        <>
        <div className="contenedor_nota">
        <button onClick={handleAddNota}>
            +
        </button>
        <textarea
        placeholder="Agregar nota"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={10}
        style={{width:'100%', resize:'none'}}
        />
        </div>
        </>
    );
}