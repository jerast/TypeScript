import { formatCurrency } from '../helpers/formatCurrency'
import { OrderItem } from '../types'

type OrderContentsProps = {
   order: OrderItem[]
   removeItem: (item: OrderItem['id']) => void
}

export const OrderContents = ({ order, removeItem } : OrderContentsProps) => {
   return (
      <div>
         <h2 className="text-4xl font-black">Consumo</h2>

         <div className="mt-10 space-y-2">
            {
               !order.length 
                  ? <p className="text-center">La orden está vacia</p>
                  : ( order.map( item => (
                        <div 
                           key={item.id}
                           className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                           <div>
                              <p className="text-lg">
                                 {item.name} - {formatCurrency(item.price)}
                              </p>
                              <p className="font-black">
                                 Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                              </p>
                           </div>
                           <button
                              className="bg-red-400 shadow-md hover:bg-red-500 h-8 w-8 rounded-full text-white font-black transition-colors"
                              onClick={() => removeItem(item.id)}
                           >
                              x
                           </button>
                        </div>
                     ))
                  )
            }
         </div>
      </div>
   )
}