import { useState } from "react";

const SaveButton = (props) => {

    const [savedWords, setSavedWords] = useState([]);
    

    const saveWord = () => {
        setSavedWords(savedWords.concat(props.saveWord))
        // savedWords.push(props.saveWord);
        console.log(savedWords);

    }

    return (
        <button onClick={saveWord} className="btn btn-sm btn-outline-success">Save</button>
    )


}

export default SaveButton;