import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import TotalPrice from '../TotalPrice/TotalPrice';
import {Order} from "../../src/types";
import './OrderDetails.css';

interface OrderDetailsProps {
    order: Order;
    removeItem: (itemName: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({order, removeItem}) => {
    return (
        <div className='order'>
            <h2>Order Details</h2>
            {Object.keys(order).length === 0 ? (
                <div>
                    <h3>Your order is empty.</h3>
                    <span>Please add some items</span>
                </div>
            ) : (
                <div>
                {Object.entries(order).map(([name, {amount, price}]) => (
                        <OrderItem key={name} name={name} amount={amount} price={price} removeItem={removeItem}/>
                    ))}
                </div>
            )}
            <TotalPrice order={order}/>
        </div>
    );
};

export default OrderDetails;
