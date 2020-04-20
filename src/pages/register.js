import React from 'react'
import Menu from '../components/menu';
import Register from '../components/register';

const about = () => {
    return (
        <div>
            <Menu active6='active'/>
            <div className='content'>
                <h1>Register</h1>
                <hr></hr>
                <Register />
            </div>
        </div>
    )
}

export default about;
