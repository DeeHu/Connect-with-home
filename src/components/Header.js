import React from 'react'
import {FaSun} from 'react-icons/fa'
import {FcBusinesswoman} from 'react-icons/fc'

const Header = () => {
    // const h1Style = {
    //     color: 'grey',
    //     margin: 10,
    // }

    // const h2Style ={
    //     margin: 20,
    // }


    return (
        <header>
            <h1 >Hello Di <FcBusinesswoman /></h1>
            <h2  >The weather in Kunming now is <FaSun style={{color: 'orange'}} /></h2>
            <h2 >What do you want know about home today?</h2>

        </header>
    )


    
}

export default Header
