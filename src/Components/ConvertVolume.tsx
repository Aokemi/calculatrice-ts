import { useState } from "react";

const ConvertVolume = () => {

    const [litres, setLitres] = useState<string>("")
    const [gallons, setGallons] = useState<string>("")

    const litresToGallons = (litres: string) => (parseFloat(litres) * 0.264).toFixed(2)
    const gallonsToLitres = (gallons: string) => (parseFloat(gallons) * 3.785).toFixed(2)

    const handleLitresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 
        setLitres(e.target.value)
        setGallons(litresToGallons(e.target.value))

    }

    const handleGallonsChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGallons(e.target.value)
        setLitres(gallonsToLitres(e.target.value))

    }

    function clearInputs(){
        setLitres("")
        setGallons("")
    }

    return (
        <div>
            <label> Litres : </label>
            <input type="number" value={litres} onChange={handleLitresChange}/> 
            <p> = </p>
            <label> Gallons : </label>
            <input type="number" value={gallons} onChange={handleGallonsChange}/>
            <button onClick={clearInputs}> Clear </button>
        </div>
    );
};

export default ConvertVolume;