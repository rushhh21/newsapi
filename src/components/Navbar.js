import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>News App</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' tag={Link} to='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Category
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link tag={Link} to='/business'>Business</MDBDropdownItem>
                                    <MDBDropdownItem link tag={Link} to='/entertainment'>Entertainment</MDBDropdownItem>
                                    <MDBDropdownItem link tag={Link} to='/health'>Health</MDBDropdownItem>
                                    <MDBDropdownItem link tag={Link} to='/science'>Science</MDBDropdownItem>
                                    <MDBDropdownItem link tag={Link} to='/sports'>Sports</MDBDropdownItem>
                                    <MDBDropdownItem link tag={Link} to='/technology'>Technology</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <div className='d-flex input-group w-auto'>
                        <MDBBtn color='primary' 
                        tag='a'
                        target="_blank"
                        href='https://rushitpatel.netlify.app/'
                        style={{
                            width: '8rem'
                        }}>
                            Contact us
                        </MDBBtn>
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}