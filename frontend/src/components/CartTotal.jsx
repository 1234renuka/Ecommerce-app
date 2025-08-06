import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import Title from './Title.jsx';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    
    // State to store the resolved cart amount
    const [cartAmount, setCartAmount] = useState(0);

    useEffect(() => {
        const fetchCartAmount = async () => {
            const amount = await getCartAmount(); // Wait for the promise to resolve
            setCartAmount(amount);
        };
        fetchCartAmount();
    }, [getCartAmount]); // Runs whenever `getCartAmount` changes

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {cartAmount}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {cartAmount === 0 ? 0 : cartAmount + delivery_fee}.00</b>
                </div>
            </div>      
        </div>
    );
};

export default CartTotal;
