import React from 'react';
import './Food.css'

const Food = ({food}) => {
    console.log(food);
    return (
        <div className="food__container">
            <img src={food.img} alt="" />
            <h4>{food.name}</h4>
            <span>{food.description}</span> <br />
            <b>{food.price}</b>
        </div>
    );
};

export default Food;