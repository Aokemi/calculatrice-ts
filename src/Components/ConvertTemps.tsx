import { useState } from "react";

const ConvertTemps = () => {

    const [secondes, setSecondes] = useState<string>("")
    const [heures, setHeures] = useState<string>("")

    const secondesToHeures = (secondes: string) => (parseFloat(secondes) / 3600).toFixed(5)
    const heuresToSecondes = (heures: string) => (parseFloat(heures) * 3600).toFixed(0)

    const handleSecondesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 
        setSecondes(e.target.value)
        setHeures(secondesToHeures(e.target.value))

    }

    const handleHeuresChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setHeures(e.target.value)
        setSecondes(heuresToSecondes(e.target.value))

    }

    function clearInputs(){
        setSecondes("")
        setHeures("")
    }

    return (
        <div>
            <label> Secondes : </label>
            <input type="number" value={secondes} onChange={handleSecondesChange}/> 
            <p> = </p>
            <label> Heures : </label>
            <input type="number" value={heures} onChange={handleHeuresChange}/>
            <button onClick={clearInputs}> Clear </button>
        </div>
    );
};

export default ConvertTemps;