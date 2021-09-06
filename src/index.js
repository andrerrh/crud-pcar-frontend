import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Register from './Register/Register'
import Registered from './Registered/Registered'
import Footer from './Footer/Footer'

ReactDOM.render(
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Register} />
            <Route path='/registered' component={Registered} />
        </Switch>
        <Footer />
    </Router>
    , document.getElementById('root'))
