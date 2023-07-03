import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
            <span>React 2023</span>
            <span>
                <Link to="/" className="mr-2">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}