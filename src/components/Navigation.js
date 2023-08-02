import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default function Navigation () {
    const [currentPage, setCurrentPage] = useState('/')
  return (
    <div class="navigate">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
       <nav>
        <ul class="navbar">
        <li class="navbutton">
        <Button variant="secondary">
                <Link 
                className={currentPage === '/' ? 'active' : ''} to='/'
                onClick={() => setCurrentPage('/')}
                >
                    Home
                </Link>
                </Button>
            </li>
            <li class="navbutton">
            <Button variant="secondary">
                <Link to='/about'
                className={currentPage === '/about' ? 'active' : ''}
                onClick={() => setCurrentPage('/about')}
                >
                    About Me
                </Link>
                </Button>
            </li>
            <li class="navbutton">
            <Button variant="secondary">
                <Link to='/portfolio'
                className={currentPage === '/portfolio' ? 'active' : ''}
                onClick={() => setCurrentPage('/portfolio')}>
                    Portfolio
                </Link>
                </Button>
            </li>
            <li class="navbutton">
            <Button variant="secondary">
                <Link to='/resume'
                className={currentPage === '/resume' ? 'active' : ''}
                onClick={() => setCurrentPage('/resume')}>
                    Resume
                </Link>
                </Button>
            </li>
            <li class="navbutton">
            <Button variant="secondary">
                <Link to='/contact'
                className={currentPage === '/contact' ? 'active' : ''}
                onClick={() => setCurrentPage('/contact')}>
                    Contact
                </Link>
                </Button>
            </li>
            
        </ul>
     </nav> 
    </div>
    
  )
}

