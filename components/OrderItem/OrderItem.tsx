import React from 'react';
import deleteImage from '../../src/assets/delete.svg';
import './OrderItem.css'

interface OrderItemProps {
    name: string;
    amount: number;
    price: number;
    removeItem: (itemName: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({name, amount, price, removeItem}) => {
    return (
        <div  className='order-details'>
            <div className='order-name'>{name}</div>
            <div className='order-amount'>x{amount}</div>
            <div className='order-price'>{price} KGS</div>
            <button onClick={() => removeItem(name)} className='remove-btn'>
                <img src={deleteImage} alt={name} width="25" height="25"/>
            </button>
        </div>
    );
};

export default OrderItem;
