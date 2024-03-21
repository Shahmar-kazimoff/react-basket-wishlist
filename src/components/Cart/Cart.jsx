import { MdDelete } from "react-icons/md";

const Cart = ({ cart, emptyCart, toggleCartVisibility, setCart }) => {
    const calculateTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    };

    const calculateGroupedCart = () => {
        const groupedCart = {};
        cart.forEach(item => {
            if (!groupedCart[item.id]) {
                groupedCart[item.id] = {
                    product: item,
                    quantity: 1,
                    totalPrice: item.price
                };
            } else {
                groupedCart[item.id].quantity++;
                groupedCart[item.id].totalPrice += item.price;
            }
        });
        return groupedCart;
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };
    const renderGroupedCart = () => {
        const groupedCart = calculateGroupedCart();
        return Object.values(groupedCart).map((item, index) => (
            <li key={index} className="mt-2 flex justify-between ">
                <span>{item.product.name} x{item.quantity}</span>
                <div className="flex gap-2">
                    <span>${item.totalPrice}</span>
                    <button className="text-red-500" onClick={() => removeFromCart(item.product.id)}><MdDelete />
                    </button>
                </div>
            </li>
        ));
    };


    return (
        <div className="border w-72 p-4 mt-2 rounded-lg shadow-lg absolute -left-[272px] bg-white">
            <h2 className="text-2xl font-semibold mb-4">Cart</h2>
            <ul>
                {renderGroupedCart()}
            </ul>
            <hr className="my-4" />
            <p className="font-semibold text-xl">Total: ${calculateTotalPrice()}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition-all mt-4" onClick={() => { emptyCart(); toggleCartVisibility(); }}>
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
