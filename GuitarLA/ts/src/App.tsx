import { Guitar } from './components/Guitar'
import { Header } from './components/Header'
import { useCart } from './hooks/useCart'

export const App = () => {

	const {
		data, 
		cart, 
		cartIsEmpty, 
		cartTotal,
		MIN_ITEMS,
		MAX_ITEMS,
		addToCart, 
		removeFromCart, 
		clearCart, 
		increaseQuantity, 
		decreaseQuantity
	} = useCart()

	return (
		<>
			<Header 
				cart={cart}
				cartIsEmpty={cartIsEmpty}
				cartTotal={cartTotal}
				removeFromCart={removeFromCart}
				clearCart={clearCart}
				increaseQuantity={increaseQuantity}
				decreaseQuantity={decreaseQuantity}
				MAX_ITEMS={MAX_ITEMS}
				MIN_ITEMS={MIN_ITEMS}
			/>

			<main className="container-xl mt-5">
				<h2 className="text-center">Nuestra Colección</h2>

				<div className="row mt-5">
					{
						data.map(guitar => 
							<Guitar 
								key={guitar.id} 
								guitar={guitar} 
								addToCart={addToCart}
							/>
						)
					}
				</div>
			</main>

			<footer className="bg-dark mt-5 py-5">
				<div className="container-xl">
					<p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
				</div>
			</footer>
		</>
	)
}   