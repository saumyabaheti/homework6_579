import { useState } from "react";

const SavedWords = (props) => {


    return <div> Saved words: {props.saveList.map((eventInstance, index) => <span>{eventInstance}, </span>)} <span id="saved_words"></span></div>
}

export default SavedWords;