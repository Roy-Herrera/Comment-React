import React  from 'react';

const Context = React.createContext()
function Provider(props) {
    const [comentarios, setComentarios] = React.useState([])
    const [individual, setIndividual] = React.useState({text: '', like: false, cantidad: 0, responder: []})
    const [respuesta, setRespuesta] = React.useState('')
    const [key, setKey] = React.useState('')


    return(
        <Context.Provider value={{
            comentarios,
            setComentarios,
            individual,
            setIndividual,
            respuesta,
            setRespuesta,
            key,
            setKey
        }}>
            {props.children }
        </Context.Provider>
    )
}

export { Context, Provider }
