import { useState } from "react";

const ResultDisplayer = ({ getNewResult }) => {
    const [result, setResult] = useState(null);

    const handleClick = () => {
        setResult(getNewResult());
    }
    return(
        <div>
            <button id='button' onClick={handleClick}>Click</button>
            {result != null && <span id='result'>{result}</span>}
        </div>
    )

}

export default ResultDisplayer;