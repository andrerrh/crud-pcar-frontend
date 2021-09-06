import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function PageOptions(props) {
    return (
        <Link 
        className="header-list" 
        onClick={() => {if(props.goto === '/' && !(window.location.href.includes('/registered'))) return window.location.reload()}}
        style={{ textDecoration: 'none' }}
        to={{
            pathname: props.goto,
            state: {
                id: false
            }
        }
        }>{props.title}</Link>
    )
}

export default PageOptions