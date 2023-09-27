import React from 'react'
import Photo from './Img/princess-6.svg'
import Icon from './Img/heart-regular-24.png'
import IconTwo from './Img/heart-solid-24.png'

function Img(props) {
    let starIcon = props.iconFavorite ? Icon : IconTwo
    return (
        <div>
            <img src={Photo} alt='' />
            <img src={starIcon} onClick={props.changeIconfunction} alt='' />
        </div>
    )
}

export default Img