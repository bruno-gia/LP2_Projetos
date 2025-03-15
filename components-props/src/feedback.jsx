// rafce -> React arrow function component export

import React from 'react'

const Feedback = (props) => {
  return (
    // Emmet >> .d-fle.justiy-content-evenly.m-2
    <div className="d-flex justify-content-evenly m-2">
        <>
            <button 
            className='btn btn-primary'
            type="button" onClick={props.funcaoOK}>
                {props.textoOK}
            </button>
            <button
            className='btn btn-danger' 
            type="button" onClick={props.funcaoNOK}>
                {props.textoNOK}
            </button>
        </>
    </div>
  )
}

export default Feedback