import { useState } from "react";

const Convertisseur = () => {
    
    const [inputTop, setInputTop] = useState<string>("")
    const [inputBottom, setInputBottom] = useState<string>("")

    function celsiusToFarenheit(celsius: string){
        const value = (parseFloat(celsius) * 9 / 5 + 32).toFixed(2)
        return value
    }    
    
    function farenheitToCelsius(farenheit: string){
        const value = (parseFloat(farenheit) - 32 * 5 / 9).toFixed(2)
        return value
    }

    const handleChangeTop = (e: React.ChangeEvent<HTMLInputElement>) =>  {

        setInputTop(e.target.value) // On charge la valeur du haut
        setInputBottom(celsiusToFarenheit(e.target.value)) // Puis on fait la conversion en bas

    }

    const handleChangeBottom = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInputBottom(e.target.value)
        setInputTop(farenheitToCelsius(e.target.value))

    }

    return (
        <div>
            <h2> Choisissez le type de conversion : </h2>
            <input type="number" value={inputTop} onChange={handleChangeTop}/> 
            <p> = </p>
            <input type="number" value={inputBottom} onChange={handleChangeBottom}/>
        </div>
    );
    
}

export default Convertisseur;