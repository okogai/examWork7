import React from 'react';
import { MenuItem } from '../../types';
import './MenuComponent.css';

interface MenuProps {
    menuItems: MenuItem[];
    addItem: (item: MenuItem) => void;
}

const MenuComponent: React.FC<MenuProps> = ({ menuItems, addItem }) => {
    return (
        <div className='menu'>
            <h2 className='menu-title'>Add Items</h2>
            {menuItems.map(item => (
                <div key={item.id} className="menu-item">
                    <img src={item.image} alt={item.name} style={{ width: '150px' }} />
                    <button onClick={() => addItem(item)}>
                        {item.name} - {item.price}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MenuComponent;
