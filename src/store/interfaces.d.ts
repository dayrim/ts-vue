export interface Product {
    inStock: number;
    right: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface Cart {
    products: Product[];
}
