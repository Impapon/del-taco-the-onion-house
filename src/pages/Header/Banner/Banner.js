import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Banner.css'
import '../Logo/Logo.css'

const Banner = () => {
    return (

 
            <div className="banner__content">
                <h2>Best Food Waiting For Your Belly</h2>

                <Form>
                    <input type="text" name="" id="" placeholder="Search food items" />
                    <button className="Search__btn">Search</button>
                </Form>
            </div>

    )

};

export default Banner;