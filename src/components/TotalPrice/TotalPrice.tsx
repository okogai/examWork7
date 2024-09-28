import React from 'react';

interface TotalPriceProps {
    order: { [key: string]: { amount: number; price: number } };
}

const TotalPrice: React.FC<TotalPriceProps> = ({ order }) => {
    const totalPrice = Object.values(order).reduce((sum, item) => sum + item.price * item.amount, 0);

    return (
        <div>
            <hr/>
            <h3>Total Price: {totalPrice} KGS</h3>
        </div>
    );
};

export default TotalPrice;
