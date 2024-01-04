import { useState, createContext } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1)
    const [players,setPlayers] = useState([])
    const [result, setResult] = useState('')


    return(

        <MyContext.Provider value={{
            // State
            stage:stage,
            players:players,
            result:result,
            // Methods
        }}>
            {props.children}
        </MyContext.Provider>
    )

}

export {
    MyContext,
    MyProvider
}