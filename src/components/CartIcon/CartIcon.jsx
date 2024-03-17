import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "../Cart/Cart";

const CartIcon = ({ cart, setCart, emptyCart }) => {
    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <div className="relative">
            <FiShoppingCart onClick={toggleCartVisibility} className="text-2xl cursor-pointer text-white" />
            {cart.length > 0 && <span className="bg-red-500 text-white h-5 w-5 flex justify-center items-center rounded-full absolute -top-2 -right-3 text-xs">
                {cart.length}
            </span>}
            {cartVisible && <Cart cart={cart} setCart={setCart} emptyCart={emptyCart} toggleCartVisibility={toggleCartVisibility} />}
        </div>
    );
};

export default CartIcon;
