import { useReducer, useState } from 'react';
import ListaNotas from './componentes/ListaNotas';
import AddNota from './componentes/AddNota';
import ReducerNotas from './componentes/ReducerNotas';

const initialNotas = [];

function notaReducer(state, action) {
  switch (action.type) {
    case 'added':
      return [...state, { id: action.id, text: action.text }];
    case 'changed':
      return state.map(nota =>
        nota.id === action.nota.id ? { ...nota, text: action.nota.text } : nota
      );
    case 'deleted':
      return state.filter(nota => nota.id !== action.id);
    default:
      return state;
  }
}

let nextId = 1;

export default function NotaApp() {
  const [notas, dispatch] = useReducer(notaReducer, initialNotas); //dispatch, se le pasa un objeto que representa la acción que deseas realizar
// El reducer recibe esta acción y determina cómo debe actualizar el estado actual basado en el tipo de acción 

  function handleAddNota(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeNota(nota) {
    dispatch({
      type: 'changed',
      nota: nota,
    });
  }

  function handleDeleteNota(notaId) {
    dispatch({
      type: 'deleted',
      id: notaId,
    });
  }

  return (
    <>
    <div className='Principal'>
      <h1>Notitaas</h1>
    <AddNota onAddNota={handleAddNota} />
      <ListaNotas 
        notas={notas}
        onChangeNota={handleChangeNota}
        onDeleteNota={handleDeleteNota}
      />
    </div>
    </>
  );
}

//useReducer toma dos argumentos: un reducer (una función que maneja cómo se actualiza el estado) y el estado inicial. Retorna el estado actual y la función dispatch para enviar acciones al reducer.