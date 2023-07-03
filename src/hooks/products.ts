import { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function addProduct(newProduct: IProduct) {
        setProducts(prevState => [...prevState, newProduct])
    }

    async function fetchProducts() {
        try {
            setError("");
            setLoading(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError((error as unknown as AxiosError).message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, error, loading, addProduct };
}