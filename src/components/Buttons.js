import React from 'react'
import PropTypes from 'prop-types'


const Buttons = ({text, onClick, type}) => {


    return (
        <button onClick={() => onClick({type})}
        className='btn'>
            {text}
            </button>
    )   
}

Buttons.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Buttons
