import React from 'react'
import {SideBarContainer, CloseIcon, Icon, SideBarLink, SideBarWrapper, SideBarMenu} from './SidebarElements';


const Sidebar = () => {
    return (
        <>
        <SideBarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>

        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='/About'>
                    About
                </SideBarLink>
                <SideBarLink to='/Services'>
                    Services
                </SideBarLink>
                <SideBarLink to='/Certification'>
                    Certification
                </SideBarLink>
                <SideBarLink to='/Blog'>
                    Blog
                </SideBarLink>
                <SideBarLink to='/Contact'>
                    Contact Us
                </SideBarLink>
            </SideBarMenu>
        </SideBarWrapper>

        </SideBarContainer>
        </>
    )
}

export default Sidebar
