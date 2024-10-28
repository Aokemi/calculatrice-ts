import { useState } from "react";


const Convertisseur = () => {
    
    const [temperature, setTemperature] = useState<number>(0)
    const [volume, setVolume] = useState<number>(0)
    const [temps, setTemps] = useState<string>("")

    const handleChange = (e: any) => {
        if (e.target.name === "temperature"){
            setTemperature(e.target.value)
        } else if (e.target.name === "volume"){
            setVolume(e.target.value)
        } else if (e.target.name === "temps"){
            setTemps(e.target.value)
        }
    }
    

    return (
        <div>
            <p>Choisissez le type de conversion : </p>
            <select id="convert" name="convert" onChange={handleChange}>
                <option value="temperature"> {temperature} </option>
                <option value="volume"> {volume} </option>
                <option value="temps"> {temps} </option>
            </select>
        </div>
    );
    
}

export default Convertisseur;