import { useState } from 'react';
import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8;

    const [cart, updateCart] = useState(0);
    const [isOpen, setIsopen] = useState(false);
    
    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={ () => setIsopen(false)}>Fermer</button>
            <h2>Panier</h2>
            <div>
                Monstera: { monsteraPrice }€
                <button onClick={ () => updateCart(cart + 1) }>
                    Ajouter
                </button>
            </div>
            <h3>Total: { monsteraPrice * cart }€</h3>
            <button onClick={ () => updateCart(0)}>
                Vider le panier
            </button>
        </div>
    ) : (
        <button onClick={ () => setIsopen(true)}>Ouvrir le panier</button>
    )
}

export default Cart;