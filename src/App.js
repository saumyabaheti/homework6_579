import './App.css';
import GenerateData from './components/GenerateData';
import SavedWords from './components/SavedWords';
import {useState} from "react";

function App() {

    const [userInput, setUserInput] = useState('');
    const [wordsList, setWordsList] = useState('');
    const [loading, setLoading] = useState('');
    const [rhyme, setRhyme] = useState(false);
    const [similar, setSimilar] = useState(false);
    const [savedWords, setSavedWords] = useState([]);


    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const onPress = (e) => {
        if (e.key === "Enter") {
        setLoading("Loading...");
        setWordsList("");
        getRhymeData(userInput);
        }
    }

    const getRhymeData = (input) => {

        // setLoading("Loading!!!");
        setRhyme(true);
        setSimilar(false);
        fetch(`https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': input})).toString()}`)
        .then((response) => response.json())
            .then((json) => setWordsList(Object.values(json)));
            
    }

    const getSimilarData = (input) => {

        // setLoading("Loading!!!");
        setSimilar(true);
        setRhyme(false)
        fetch(`https://api.datamuse.com/words?${(new URLSearchParams({'ml': input})).toString()}`)
        .then((response) => response.json())
            .then((json) => setWordsList(Object.values(json)));
            

    }

    const setArray = (word) =>

    {
        setSavedWords([...savedWords, word])

    }

    const setLoad = () =>

    {
        setLoading("")
    }


  return (

    <main className="container">
        <div>https://github.com/saumyabaheti/homework6_579/tree/main</div>
    <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
    <div className="row">
        <SavedWords saveList={savedWords}></SavedWords>
    </div>
    <div className="row">
        <div className="input-group col">
            <input className="form-control" type="text" placeholder="Enter a word" id="word_input" value={userInput} onChange={handleChange} onKeyDown={onPress}/>  
            <button onClick={() => {setLoading("Loading...");setWordsList("");getRhymeData(userInput)}} id="show_rhymes" type="button" className="btn btn-primary">Show rhyming words</button>  
            <button onClick={() => {setLoading("Loading...");setWordsList("");getSimilarData(userInput)}} id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>
        </div>
    </div>
    <GenerateData data={wordsList} input={userInput} load={loading} rhymingStatus={rhyme} similarStatus={similar} setSaveWord={setArray} setLoading={setLoad} savedWordsList={savedWords}></GenerateData>
    {loading}
    <div className="row">
        <h2 className="col" id="output_description"></h2>
    </div>
    <div className="output row">
        <output id = "word_output" class="col"></output>
    </div>
  </main>
  );
}

export default App;
