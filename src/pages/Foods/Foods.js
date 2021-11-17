import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {

    const [food, setFood] = useState([])
    const foods = [
        {
            id: 1,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://i.ibb.co/Jt27FgK/lunch2.png",
            price:"$9.5"
        },
        {
            id: 2,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://i.ibb.co/RyhhLJ6/lunch3.png",
            price:"$4.5"
        },

        {
            id: 3,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "      https://i.ibb.co/N3QHtBc/lunch4.png",
            price:"$5.5"
        },
        {
            id: 4,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://i.ibb.co/yFKsRQG/lunch5.png",
            price:"$7.5"
        },
        {
            id: 5,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://i.ibb.co/phh8vb6/lunch6.png",
            price:"$6.5"
        },
        {
            id: 6,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img : "https://i.ibb.co/yfLRVtN/lunch1.png",
            price:"$3.5"
        },

    ]

    return (
        <Container className="foods__container">
   
            {foods.map(food => <Food food={food}></Food>)}
        </Container>
    );
};

export default Foods;