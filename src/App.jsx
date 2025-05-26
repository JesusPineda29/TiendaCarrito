import { useState, useEffect, use } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Guitar } from "./components/Guitar"
import { db } from "./data/db"


export const App = () => {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [data, setData] = useState(db);
    const [cart, setCart] = useState(initialCart);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
        , [cart]);


    const addToCart = (item) => {
        const itemExist = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemExist >= 0) { // Verificar si el item ya existe en el carrito
            const updatedCart = [...cart]; // Crear una copia del carrito
            updatedCart[itemExist].quantity++; // Incrementar la cantidad del item existente
            setCart(updatedCart); // Actualizar el estado del carrito
        } else {
            item.quantity = 1; // Asignar una cantidad inicial de 1
            setCart([...cart, item]);
        }
    }


    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
    }


    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < 5) { // Limitar la cantidad máxima a 5
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 0) { // Limitar la cantidad minima a 1
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        })
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }





    return (
        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitar
                            key={guitar.id}
                            gui={guitar}
                            setCart={setCart}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}