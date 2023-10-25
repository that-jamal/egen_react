import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

export default function Shop() {
    const [products, setProducts] = useState([])
    async function fetchData() {
        const res = await fetch("http://10.111.3.78:3001/api/products")
        const data = await res.json()
        setProducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='item'>
            {products.map((product) => (
                <ProductCard data={product} />
            ))}
        </div>
    )
}