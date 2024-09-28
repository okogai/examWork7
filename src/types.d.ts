export interface MenuItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface OrderProps {
    amount: number;
    price: number;
}

export interface Order {
    [key: string]: OrderProps;
}

