import React, {useState} from 'react';
import {FaShoppingBag} from 'react-icons/fa'
import CartItem from "./CartItem";
import { StickyContainer, Sticky } from 'react-sticky';

const showOrders = (props) =>{
    let summa = 0;
    props.orders.forEach(el=>summa += Number.parseFloat(el.price));
    return(
        <div>
            {props.orders.map(el=>(
            <CartItem onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className={"sum"}>Total: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () =>{
    return(
        <div className={"empty"}>
            <h2>You haven't added any goods yet</h2>
        </div>
    )
}

const Header = (props) => {
    let[cartOpen, setCartOpen] = useState(false)
    return (
        <header>
                        <div>
                            <span className={'logo'}>Underwear Staff</span>
                            <ul className={'nav'}>
                                <li>Cabinet</li>
                                <li>Contacts</li>
                                <li>About us</li>
                            </ul>
                            <FaShoppingBag onClick={()=> setCartOpen(cartOpen = !cartOpen)}
                                           className={`shop-cart-button ${cartOpen && 'active'}`}/>
                            {cartOpen && (
                                <div className={'shop-cart'}>
                                    {props.orders.length>0?
                                        showOrders(props):
                                        showNothing()
                                    }

                                </div>
                            )}
                        </div>
            <div className={'presentation'}></div>
        </header>

    )};

export default Header;