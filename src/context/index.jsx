import { useState, createContext } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1)
    const [players,setPlayers] = useState([])
    const [result, setResult] = useState('')

    const addPlayerHandler = (name) => {
        setPlayers(prevState => ([
            ...prevState,
            name
        ]))
    }

    const removePlayerHandler = (idx) => {
        let newArray = [...players];
        newArray.splice(idx,1);

        setPlayers(newArray);
    }

    const nextHandler = () => {
        if(players.length < 2) {
            alert('nop')
        } else {
            setStage(2);
            setTimeout(()=>{
                generateLoser()
            },2000)
        }
    }

    const generateLoser = () => {
        let result = players[Math.floor(Math.random()*players.length)];
        setResult(result);

        console.log(result)
    }


    return(

        <MyContext.Provider value={{
            // State
            stage:stage,
            players:players,
            result:result,
            // Methods
            addPlayer:addPlayerHandler,
            removePlayer:removePlayerHandler,
            next:nextHandler,
        }}>
            {props.children}
        </MyContext.Provider>
    )

}

export {
    MyContext,
    MyProvider
}