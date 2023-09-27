import React, { useState } from 'react'
import Img from './Img'

function SecondExampl() {
    const [information, setInformation] = useState({
        name: "Jane",
        surname: "Doe",
        phone: "0777-999-4657",
        email: "jj.doegmail.com",
        isFavorite: true
    })

    function changeIconColor() {
        setInformation(prevState => ({
            ...prevState,
            isFavorite: !information.isFavorite
        }))
    }
    return (
        <>
            <div style={{ width: "300px" }}>
                <Img
                    iconFavorite={information.isFavorite}
                    changeIconfunction={changeIconColor} />
                <h2>{information.name} {information.surname}</h2>
                <h4>{information.phone}</h4>
                <h4>{information.email}</h4>
            </div>
        </>
    )
}

export default SecondExampl