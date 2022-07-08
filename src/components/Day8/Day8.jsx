import React from 'react';
import { useState } from 'react';
import './Day8.css';

export default function Day8() {
    const [productsList, setProductList] = useState([])
    const [todosList, setTodosList] = useState([])
    const [photosList, setPhotosList] = useState([])
    const [apiLoaded, setApiLoaded] = useState(false)
    const callAPI = async() => {
        if (apiLoaded) {
            return
        }
        setProductList(null)
        setTodosList(null)
        setPhotosList(null)
        const products = await (await fetch('https://fakestoreapi.com/products')).json()
        const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
        const photos = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()
        setProductList(products)
        setTodosList(todos)
        setPhotosList(photos)
        setApiLoaded(true)
    }
    return (
        <>
            <div>
                <button onClick={callAPI}>Call API</button>
            </div>
            <div className="hw">
                <div className='api'>
                    {productsList !== null ? productsList.map((item, index) => {
                        return <p key={index}>{item.title}</p>}) : <p>Loading</p>
                    }
                </div>
                <div className='api'>
                    {productsList !== null ? todosList.map((item, index) => {
                        return <p key={index}>{item.title}</p>}) : <p>Loading</p>
                    }
                </div>
                <div className='api'>
                    {productsList !== null ? photosList.map((item, index) => {
                        return <p key={index}>{item.title}</p>}) : <p>Loading</p>
                    }
                </div>
            </div>
        </>
    )
}
