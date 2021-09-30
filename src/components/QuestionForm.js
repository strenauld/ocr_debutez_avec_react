import { useState } from "react";

function QuestionForm() {
    const [inputValue, setInputValue] = useState("Posez votre question");
    const isInputError = inputValue.includes("f");

    /**
     * bloque la touche 'f'
     * @param {*} value 
     */
    function checkValue(value) {
        if(!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea
                value={ inputValue }
                onChange={ (e) => checkValue(e.target.value) }
            />
            { isInputError && (
                <div>Vous n'avez pas le droit d'utiliser la lettre 'f'</div> // commenter la fonction checkValue(value) pour voir le resultat
            )}
            <button onClick={ () => alert(inputValue) }>Alerte</button>
        </div>
    )
}

export default QuestionForm;