import React, { useState } from 'react';
import OrderDetails from '../components/OrderDetails/OrderDetails.tsx';
import MenuComponent from '../components/MenuComponent/MenuComponent.tsx'
import cheeseburgerImage from './assets/cheeseburger.png';
import rollImage from './assets/roll.png';
import nuggetsImage from './assets/nuggets.png';
import friesImage from './assets/fries.png';
import latteImage from './assets/latte.png';
import milkshakeImage from './assets/milkshake.png';
import colaImage from './assets/cola.png';
import icecreamImage from './assets/icecream.png';
import strawberryImage from './assets/icecream.png';
import { MenuItem, Order } from './types';
import './App.css';

const menuItems: MenuItem[] = [
    { id: 1, name: 'Cheeseburger', price: 174, image: cheeseburgerImage},
    { id: 2, name: 'Mega Roll', price: 349, image: rollImage},
    { id: 3, name: 'Nuggets', price: 219, image: nuggetsImage},
    { id: 4, name: 'Fries', price: 129, image: friesImage},
    { id: 5, name: 'Latte', price: 134, image: latteImage},
    { id: 6, name: 'Milkshake', price: 125, image: milkshakeImage},
    { id: 7, name: 'Cola', price: 76, image: colaImage},
    { id: 8, name: 'Ice cream', price: 39, image: icecreamImage},
    { id: 9, name: 'Strawberry Ice cream', price: 89, image: strawberryImage}
];

const App: React.FC = () => {
    const [order, setOrder] = useState<Order>({});

    const addItem = (item: MenuItem) => {
        const newOrder = { ...order };
        if (newOrder[item.name]) {
            newOrder[item.name].amount += 1;
        } else {
            newOrder[item.name] = { amount: 1, price: item.price };
        }
        setOrder(newOrder);
    };

    const removeItem = (itemName: string) => {
        const newOrder = { ...order };
        delete newOrder[itemName];
        setOrder(newOrder);
    };

    return (
        <div className='fast-food-constructor'>
            <OrderDetails order={order} removeItem={removeItem} />
            <MenuComponent menuItems={menuItems} addItem={addItem} />
        </div>
    );
};

export default App;
