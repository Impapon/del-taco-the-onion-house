import React from 'react';
import { Nav } from 'react-bootstrap';
import './ItemNav.css'

const ItemNav = () => {
    return (
        <div>
            <Nav className="justify-content-center item__nav" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Dinner</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    );
};

export default ItemNav;