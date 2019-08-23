import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../css/app.css';

import Header from './Header';
import About from './About'
import Projects from './Projects'
import ProjectIngersAlternativ from './ProjectIngersAlternativ'
import Contact from './Contact'
import Footer from './Footer'
import Profile from './Profile'

export default function () {
    
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Profile} />
                <Route path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/ingersalternativ" component={ProjectIngersAlternativ} />
                <Route path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
        
    )
}
