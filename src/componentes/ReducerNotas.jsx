export default function ReducerNotas(notas, action) {
        switch(action.type) {
            case 'add_nota': {
                return [
                    ...notas,
                    { id: action.id, text: action.text,
                        done:false,
                     }
                ]
            }
            case 'edit_nota': {
                return notas.map((n) => 
                {
                    if (n.id === action.nota.id) {
                        return action.nota;
                    }
                    else {
                        return n;
                    }
                });
            }
            case 'remove_nota':{
                return notas.filter((nota, index) => index != action.index);
            }
            default: {
                return notas;
            }
        }
    }

