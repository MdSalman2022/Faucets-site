import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaEthereum } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import './Header.css'


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">

            <Container className='d-flex justify-content-between '>
                <Navbar.Brand href="#home"><p className='fs-3 fw-semibold text-color'>Faucets</p></Navbar.Brand>
                <div className='d-flex align-items-center'>
                    <Nav className='border'>
                        <NavDropdown title=" Ethereum Kovan" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Arbitrum Rinkby</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Avalanche Fuji</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">BNB Chain TESTNET</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" selected> <FaEthereum /> Ethereum Rinkeby</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fantom Testnet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Harmony Testnet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">POA Network Sokol</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Polygon Mumbai</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"> <div className="wallet-btn"> <FaWallet /> Connect Wallet</div></Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </div>


            </Container>
        </Navbar >
    );
}

export default Header;