import { useContext } from "react"
import { MyContext } from "../context"



const Stage2 = () => {
    const context = useContext(MyContext)

    return(
        <>
            <div className="result_wrapper">
                <h3>Loser is: </h3>
                {context.result}
            </div>
        </>
    )
}

export default Stage2