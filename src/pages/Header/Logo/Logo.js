import React from 'react';
import './Logo.css'
import logo from '../../../images/logo2.png'
import notification from '../../../images/ICON/Group 1133.png'
import { Link } from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Banner from '../Banner/Banner';
import '../Banner/Banner.css'

const Logo = () => {
    return (
        // <div className="logo__container">
        //     <div className="logo__img">
        //         <img src={logo} alt="" />
        //     </div>

        //     <div className="logo__nav">
        //         <img src={notification} alt="" />
        //         <Button>Login</Button>
        //         <Button>Sign Up</Button>
        //     </div>
        // </div>


       <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home" className="logo__img"> <img src={logo} alt="" /></Navbar.Brand>
                
                <Navbar.Collapse className="logo__nav">
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                    <button className="login__btn">Login</button>
                    <button className="signUP__btn">Sign up</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container className="banner_container">
            <Banner/>
        </Container>
       </>

    );
};

export default Logo; <h2>Logo will be here </h2>