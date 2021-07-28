import React from 'react'
import { NavbarContainer, Nav, NavLogo, NavLinks,MobileIcon,NavMenu,NavItem} from './NavbarElements';
import {FaBars} from 'react-icons/fa';


const Navbar = () => {
    return (
        <>
    <Nav>
<NavbarContainer>
    <NavLogo to='/'>
       Dolla
    </NavLogo>
    <MobileIcon>
        <FaBars/>
    </MobileIcon>
<NavMenu>
    <NavItem>
        <NavLinks to='Home'>
Home
        </NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='about'>
About
        </NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='Services'>
Services
        </NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='Certifications'>
Certifications
        </NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='Blog'>
Blog
        </NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to='Contact'>
Contact Us
        </NavLinks>
    </NavItem>
</NavMenu>


</NavbarContainer>


    </Nav>

        </>
    )
}

export default Navbar;
