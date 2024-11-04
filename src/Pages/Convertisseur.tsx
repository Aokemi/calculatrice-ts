import { useState } from "react";


const Convertisseur = () => {
    
    const [inputTop, setInputTop] = useState<number>(0)
    const [inputBottom, setInputBottom] = useState<number>(celsiusToFarenheit(inputTop))

    function celsiusToFarenheit(celsius: number){
        return (celsius * 9 / 5) + 32
    }    
    
    function farenheitToCelsius(farenheit: number){
        return (farenheit - 32) * 5 / 9
    }

    const handleChangeTop = (e: React.ChangeEvent<HTMLInputElement>) =>  {

        const value = parseInt(e.target.value)
        setInputTop(value) // On charge la valeur du haut
        setInputBottom(celsiusToFarenheit(value)) // Puis on fait la conversion en bas

    }

    const handleChangeBottom = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = parseInt(e.target.value)
        setInputBottom(value)
        setInputTop(farenheitToCelsius(value))

    }

    return (
        <div>
            <h2> Choisissez le type de conversion : </h2>
            <input type="number" value={isNaN(inputTop) ? "" : inputTop} onChange={handleChangeTop}/> 
            <p> = </p>
            <input type="number" value={isNaN(inputBottom) ? "" : inputBottom} onChange={handleChangeBottom}/>
        </div>
    );
    
}

export default Convertisseur;