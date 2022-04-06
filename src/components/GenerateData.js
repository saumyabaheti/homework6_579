import ListInstance from "./ListInstance";


const GenerateData = (props) => {

   


    if (props.data === '') {
        return (<div></div>)
    }

if (props.rhymingStatus) {

        const generateList = () => {


            const listToDisplay = [];

            const groups = groupBy(props.data, "numSyllables");

            for (const [key, value] of Object.entries(groups)) {
                listToDisplay.push("Number of syllables:", key)
                for (const group in groups[key]) {
                    listToDisplay.push(

                        <ListInstance wordItem={groups[key][group].word} setSaveWord={props.setSaveWord} savedWordsList={props.savedWordsList}></ListInstance>
                    )
    
                }

            }

        return listToDisplay;

        }

        if (props.data.length > 0) {
            props.setLoading();
            return (
                <div> {props.load}
                <h3>Words that rhyme with {props.input}</h3>
                <div>{generateList()}</div>
                </div>
                
            )
        }

                
        else {
            props.setLoading();
            return <h2>No results found</h2>

        }

    }

    if (props.similarStatus) {

        const generateList = () => {

            const listToDisplay = [];

            props.data.forEach((eventInstance, index) => 
            listToDisplay.push(<ListInstance wordItem={eventInstance.word} setSaveWord={props.setSaveWord} savedWordsList={props.savedWordsList}></ListInstance>)
            )

        return listToDisplay;

        }

        if (props.data.length > 0) {
            props.setLoading();
            return (
                <div> {props.load}
                <h3>Words that are similar to {props.input}</h3>
                <div>{generateList()}</div>
                </div>
                
            )
        }

                
        else {
            props.setLoading();
            return <h2>No results found</h2>

        }

    }

}

    function groupBy(objects, property) {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if(typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }
    
        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for(const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if(!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }
    
        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for(const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        return result;
    }

export default GenerateData;