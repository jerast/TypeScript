import { MenuItem } from './components/MenuItem'
import { useOrder } from './hooks/useOrder'
import { menuItems } from './data/db'
import { OrderContents } from './components/OrderContents'
import { OrderTotals } from './components/OrderTotals'
import { TipPercentageForm } from './components/TipPercentageForm'

export const App = () => {

	const { 
      order, 
      tip, 
      setTip, 
      addItem, 
      removeItem,
      placeOrder } = useOrder()

	return (
		<>
			<header className="bg-blue-400 py-5 shadow-lg">
			   <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
			</header>

			<main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
			
			<div className="p-5">
				<h2 className="text-4xl font-black">Menú</h2>
				<div className="mt-10 space-y-2">
					{
						menuItems.map(menuItem => (
							<MenuItem 
								key={menuItem.id}
								item={menuItem}
								addItem={addItem}
							/>
						))
					}
				</div>
			</div>

			<div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
				<OrderContents 
               order={order}
               removeItem={removeItem}
            />

            {
               order.length > 0
                  ? (
                     <>
                        <TipPercentageForm 
                           tip={tip}
                           setTip={setTip}
                        />

                        <OrderTotals 
                           order={order}
                           tip={tip}
                           placeOrder={placeOrder}
                        />
                     </>
                  ) : <></>
            }

			</div>

			</main>
		</>    
	)
}
