const ProductItem = ({ product, cart, setCart }) => {
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    return (
        <div className="border p-1 m-2 rounded-lg shadow-lg">
            <img
                className="border w-full object-cover"
                src={product.image}
                alt="Product" />
            <div className="p-2">
                <h2 className="lg:text-2xl text-xs font-semibold">{product.name}</h2>
                <p className="text-gray-500 my-2">${product.price}</p>
                <button
                    className="bg-black py-2 text-white lg:text-xl text-xs rounded hover:bg-green-800 w-full  duration-200"
                    onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem
