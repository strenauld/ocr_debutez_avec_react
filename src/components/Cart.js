import { useState } from 'react';
import '../styles/Cart.css'

function Cart({ cart, updateCart}) {
    const monsteraPrice = 8;
    const [isOpen, setIsopen] = useState(false);
    
    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={ () => setIsopen(false)}>Fermer</button>
            <h2>Panier</h2>
            <h3>Total: { monsteraPrice * cart }€</h3>
            <button onClick={ () => updateCart(0)}>
                Vider le panier
            </button>
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button className="lmj-cart-toggle-button" onClick={ () => setIsopen(true)}>Ouvrir le panier</button>
        </div>
        
    )
}

export default Cart;