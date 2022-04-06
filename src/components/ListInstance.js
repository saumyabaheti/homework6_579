import SaveButton from "./SaveButton";
import { useState } from "react";

const ListInstance = (props) => {

    const saveToArray = () => {
        
        // props.savedWordsList.push(props.wordItem);
        // props.setSaveWord(props.savedWordsList)
        props.setSaveWord(props.wordItem);

    }


    return (
        <div>
        <li>{props.wordItem}
        <button onClick={saveToArray} className="btn btn-sm btn-outline-success">Save</button>
        </li>
        </div>
    )

   
}

export default ListInstance;