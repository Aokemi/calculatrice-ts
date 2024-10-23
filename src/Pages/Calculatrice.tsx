import { useState } from "react";

const Calculatrice = () => {

    const [display, setDisplay] = useState<string>("")
    const [result, setResult] = useState<string>("")

    const handleClick = (value : string) => {

        if (value === "="){
            if (display.includes("!")){
                const displayParts = display.split("! ")
                const num = parseInt(displayParts[0])
                if (displayParts[1] !== ""){
                    setResult("Opération invalide")
                } else {
                    setResult(factorielle(num).toString())
                }
            } else {
                setResult(eval(display))
            }
        } else if (value === "C") {
            setDisplay("")
            setResult("")
        } else {
            setDisplay(display + value)
        }

    } 


    function factorielle(number: number) {

        let factorielle = 1

        for (let i = 1; i <= number; i++){
            factorielle *= i
        }

        return factorielle
    }


        return (
            <div>
                <p> Calculatrice </p>
                <p className="texte"> {display} = {result} </p>

                <button className="bouton" onClick={() => handleClick("1")} > 1 </button>
                <button className="bouton" onClick={() => handleClick("2")}> 2 </button>
                <button className="bouton" onClick={() => handleClick("3")}> 3 </button>
                <button className="bouton" onClick={() => handleClick("/")}> ÷ </button>

                < br />
                <button className="bouton" onClick={() => handleClick("4")}> 4 </button>
                <button className="bouton" onClick={() => handleClick("5")}> 5 </button>
                <button className="bouton" onClick={() => handleClick("6")}> 6 </button>
                <button className="bouton" onClick={() => handleClick("*")}> x </button>

                < br />
                <button className="bouton" onClick={() => handleClick("7")}> 7 </button>
                <button className="bouton" onClick={() => handleClick("8")}> 8 </button>
                <button className="bouton" onClick={() => handleClick("9")}> 9 </button>
                <button className="bouton" onClick={() => handleClick("-")}> - </button>

                < br />               
                <button className="bouton" onClick={() => handleClick("**")}> ^ </button>
                <button className="bouton" onClick={() => handleClick("0")} > 0 </button>
                <button className="bouton" onClick={() => handleClick(".")}> . </button>
                <button className="bouton" onClick={() => handleClick("+")}> + </button>
                
                < br />
                <button className="bouton" onClick={() => handleClick("!")}> ! </button>
                <button className="bouton" onClick={() => handleClick("=")}> = </button>
                <button className="bouton" onClick={() => handleClick("C")}> C </button>               
            </div>
        );
    
}  

export default Calculatrice;