import { useState } from "react";
import '../hojas-de-estilo/ListaNotas.css'

export default function ListaNotas({notas, onChangeNota, onDeleteNota}) {
    return (
        <ul>
            {notas.map((nota) => (
                <li key={nota.id}>
                    <li key={nota.id}>
                        <Nota nota={nota} onChange={onChangeNota} onDelete={onDeleteNota} />
                    </li>
                </li>
            ))}
        </ul>
    );
}

function Nota({nota, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let notaContent;
    if(isEditing) {
        notaContent = (
            <>
            <textarea
            value={nota.text}
            onChange={(e) => {
                onChange({
                    ...nota, 
                    text: e.target.value,
                });
            }}
            />
            <button onClick={() => setIsEditing(false) }>Guardar</button>
            </>
        );
    } else {
        notaContent = (
            <>
            {nota.text}
            <button onClick={() => setIsEditing(true)}>Editar</button>
            </>
        );
    }
    return (
        <label>
            {notaContent}
            <button onClick={() => onDelete(nota.id)}>Borrar</button>
        </label>
    );
}