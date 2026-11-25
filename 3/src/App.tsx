import './App.css'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './s__firebaseConfig'
import { useState } from 'react'
import { get, getDatabase, onValue, ref, set } from 'firebase/database';


export default function App() {
    const firebase = initializeApp(firebaseConfig);
    const db = getDatabase(firebase);

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [outvalue1, setoutvalue1] = useState("");

    const commit = async () => {
        const newDocumentRef = ref(db, "foods/fruits");
        set(newDocumentRef, {
            fruitName: inputValue1,
            fruitColour: inputValue2
        }).then(() => {
            alert("Data committed");
        }).catch((error) => {
            alert(`Err: ${error}`)
        })
    }

    const fetch = async () => {
        const dbref = ref(db, "foods/fruits");
        const snapshot = await get(dbref);
        if (snapshot.exists()) {
            console.log(`Snapshot exists: ${snapshot.val()}`)
            setoutvalue1(snapshot.val()["fruitColour"]);
        } else {
            console.log("Snapshot does not exist")
        }
    }

    onValue(ref(db, "foods/fruits"), (snapshot) => {
        if (snapshot.exists()) {
            setoutvalue1(snapshot.val()["fruitName"]);
        }
    })

    return <>
        <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
        <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}/>
        <br />
        <button onClick={commit}>Commit</button>
        <br /><br />
        <button onClick={fetch}>Get Data</button>
        <br />
        <p>Fruit Colour: {outvalue1}</p>
    </>
}
