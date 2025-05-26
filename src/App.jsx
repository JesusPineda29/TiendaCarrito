import { useState, useEffect, use } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Guitar } from "./components/Guitar"
import { db } from "./data/db"


export const App = () => {

    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);


    const addToCart = (item) => {

        const existingItem = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItem >= 0) { // Verificar si el item ya existe en el carrito
            const updatedCart = [...cart]; // Crear una copia del carrito
            updatedCart[existingItem].quantity += 1; // Incrementar la cantidad del item existente
        } else {
            item.quantity = 1; // Asignar una cantidad inicial de 1
            setCart([...cart, item]);
        }
    }



    return (
        <>
            <Header />

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