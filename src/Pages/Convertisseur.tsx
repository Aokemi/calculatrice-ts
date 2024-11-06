import { useState } from "react";
import ConvertTemperature from "../Components/convertTemperature";
import ConvertVolume from "../Components/convertVolume";
import ConvertTemps from "../Components/ConvertTemps";

const Convertisseur = () => {
    
    const [conversionType, setConversionType] = useState<string>("temperature")

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>  {

        setConversionType(e.target.value)

    }

    return (
        <div>
            <h2> Choisissez le type de conversion : </h2>

            <select onChange={handleSelect} value={conversionType}>
                <option value="temperature"> Température </option>
                <option value="volume"> Volume </option>
                <option value="temps"> Temps </option>
            </select>

            {conversionType === "temperature" && <ConvertTemperature />}
            {conversionType === "volume" && <ConvertVolume />}
            {conversionType === "temps" && <ConvertTemps />}
            
        </div> 
    );
    
}

export default Convertisseur;