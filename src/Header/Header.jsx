import React from 'react'
import './Header.css'
import PageOptions from './PageOptions'

function Header() {
    return (
        <header className="header">
            <PageOptions title={'Home'} goto={'/'} />
            <PageOptions title={'Registered'} goto={'/registered'} />
        </header>
    )
}

export default Header