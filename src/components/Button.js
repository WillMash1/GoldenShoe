import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'


function Button({children, disable, path}) {

  return (
    <Link to={'/products'} className='btn-mobile' onClick={path}>
        <button className={`btn btn--primary btn--large ${disable}    `}>
            {children}
        </button>
        
        
    </Link>
  )
}

export default Button