import CartIcon from '../CartIcon/CartIcon'
const Header = ({ cart, emptyCart, setCart }) => {
    return (
        <div className='flex justify-between items-center bg-black py-3 px-4 fixed left-0 right-0 top-0'>
            <div className='text-2xl text-white'>Shopping Cart</div>
            <CartIcon cart={cart} emptyCart={emptyCart} setCart={setCart} />
        </div>
    )
}

export default Header