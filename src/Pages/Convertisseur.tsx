import { useState } from "react";


const Convertisseur = () => {
    
    const [temperature, setTemperature] = useState<number>(0)
    const [volume, setVolume] = useState<number>(0)
    const [temps, setTemps] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<any>) => {
        if (e.target.name === "temperature"){
            setTemperature(e.target.value)
        } else if (e.target.name === "volume"){
            setVolume(e.target.value)
        } else if (e.target.name === "temps"){
            setTemps(e.target.value)
        }
    }

    const handleChangeValue = (e : React.ChangeEvent<any> ) => {

        setTemperature(e.target.value)

    }

    function convertTemperature(number: number){
        const converted = (number - 32) * 5 / 9
        return converted
    }
    

    return (
        <div>
            <p>Choisissez le type de conversion : </p>
            <select id="convert" name="convert" onChange={handleChange}>
                <option value="temperature"> Température </option>
                <option value="volume"> Volume </option>
                <option value="temps"> Temps </option>
            </select>

            < br />
            < br />
            <input type="number" name="temperature" value={temperature} onChange={handleChangeValue}/>
            <input type="number" name="convertTemperature" value={convertTemperature(temperature)}/>
            < br />


        </div>
    );
    
}

export default Convertisseur;