import React from 'react'
import Menu from '../components/menu';

const index = () => {
    return (
        <div>
            <Menu active1='active'/>
            <div className='content'>
                <h1>Welcome!</h1>
                <hr></hr>
                
            </div>
        </div>
    )
}

export default index;
