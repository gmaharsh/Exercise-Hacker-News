import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'

function NavBar() {

    const location = useLocation();
    console.log(location.pathname);
    return (
        <Navbar>
            <h1>Hacker News</h1>
            <Link to={location.pathname === '/history'? '/search' : '/history'} style={{ 'color': 'white','text-decoration': 'none', 'marginRight':'1rem'}}>{location.pathname === '/history' ? 'Search Something else' : 'See History'}</Link>
        </Navbar>
    )
}

export default NavBar;

const Navbar = styled.div`
    background:black;
    color:white;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    Link{
        color:white;
    }
`;