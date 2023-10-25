import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (<div >
        <div className='header'> <h2>
            <a href="/">Home. </a>
            <a href="/shop">Products. </a>
            <a href="/checkout">cart.</a>
        </h2></div>
        {children}
        <div className='footer'></div>
    </div>)
}