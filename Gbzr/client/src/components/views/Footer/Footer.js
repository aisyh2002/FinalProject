
import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            border:'solid 2px lightgray',
            height: '50px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor:'teal',
            color:'white',
            fontSize:'24px'
        }}>
           <p>GroCery.bazAr</p>
        </div>
    )
}

export default Footer
