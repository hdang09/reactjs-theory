import { useState, useMemo, useRef } from "react"

// Prevent excute function that runs on every render

function UseMemo() {

    const [bookName, setBookName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    

    const total = useMemo(() => {
        const totalResult = products.reduce((result, product) => 
            result + product.price, 
            0
        )

        return totalResult
    }, [products])


    const nameRef = useRef()


    const handleAddCart = () => {
        // setProducts(prev => [
        //     ...prev,
        //     {
        //         bookName,
        //         price: +price
        //     }
        // ])
            // or
        setProducts([...products,
            {
                bookName,
                price: +price
            }
        ])

        setBookName('')
        setPrice('')
        nameRef.current.focus()
    }

    return (
        <>
            <input 
                value={bookName}
                placeholder="Enter a book name..."
                onChange={e => setBookName(e.target.value)}
                ref={nameRef}
            />
            <input 
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <button onClick={handleAddCart}>Add cart</button>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.bookName} - {product.price}</li>
                ))}
            </ul>
            <h3>Total : {total}</h3>
        </>
    )
}

export default UseMemo