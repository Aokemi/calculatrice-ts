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

    const handleChangeInputTop = (e : React.ChangeEvent<any> ) => {

        setTemperature(e.target.value)

    }

    const handleChangeInputBot = (e : React.ChangeEvent<any> ) => {

        setTemperature(e.target.value)

    }

    function convertCtoF(number: number){
        const convertedCtoF = (number - 32) * 5 / 9
        return convertedCtoF
    }

    function convertFtoC(number: number){
        const convertedFtoC = (number * 9 / 5) + 32
        return convertedFtoC
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
            <input type="number" name="valueTop" value={convertFtoC(temperature)} onChange={handleChangeInputTop}/>
            <p> = </p>
            <input type="number" name="valueBot" value={convertCtoF(temperature)} onChange={handleChangeInputBot} />

        </div>
    );
    
}

export default Convertisseur;