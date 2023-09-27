import React, { useState } from 'react'

function Example() {

    // const thingsArray = ["Thing 1", "Thing 2"];
    // const mapArray = thingsArray.map((item) => {
    //     return <p>{item}</p>
    // })

    // function addItem() {
    //     let text = `Thing ${thingsArray.length + 1}`;
    //     thingsArray.push(text)
    //     console.log(thingsArray)
    // }

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);
    console.log(thingsArray)
    function addItem() {
        setThingsArray(prevValue => {
            return [...prevValue,`Thing ${prevValue.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => {
        return <p key={thing}>{thing}</p>
    })

    return (
        <div style={{ display: 'flex', flexDirection: "column", padding: "20px" }}>
            {thingsElements}
            <button onClick={addItem} style={{ marginTop: "10px" }}>Add Item </button>
        </div>
    )
}

export default Example