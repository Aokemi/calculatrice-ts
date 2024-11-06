import { useState } from 'react';

const ConvertTemperature = () => {

    const [celsius, setCelsius] = useState<string>("")
    const [farenheit, setFarenheit] = useState<string>("")

    const celsiusToFarenheit = (celsius: string) => (parseFloat(celsius) * 9 / 5 + 32).toFixed(2)
    const farenheitToCelsius = (farenheit: string) => (parseFloat(farenheit) - 32 * 5 / 9).toFixed(2)

    const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {

        setCelsius(e.target.value) // On charge la valeur du haut
        setFarenheit(celsiusToFarenheit(e.target.value)) // Puis on fait la conversion en bas

    }

    const handleFarenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFarenheit(e.target.value)
        setCelsius(farenheitToCelsius(e.target.value))

    }

    function clearInputs(){
        setCelsius("")
        setFarenheit("")
    }

    return (
        <div>
            <label> Celsius : </label>
            <input type="number" value={celsius} onChange={handleCelsiusChange}/> 
            <p> = </p>
            <label> Fareinheit : </label>
            <input type="number" value={farenheit} onChange={handleFarenheitChange}/>
            <button onClick={clearInputs}> Clear </button>
        </div>
    );
};

export default ConvertTemperature;