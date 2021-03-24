import React, {useState} from 'react'
import '../styles/Button.css'

function Button(props) {
    return(
        <button className="button"> {props.text} </button>
    );
}

export default Button;