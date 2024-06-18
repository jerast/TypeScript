import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/formatCurrency"

type OrderTotalsProps = {
   order: OrderItem[]
   tip: number
   placeOrder: () => void
}

export const OrderTotals = ({ order, tip, placeOrder } : OrderTotalsProps) => {

   const subtotalAmount = useMemo(() => 
      order.reduce((total, item) => total + (item.quantity * item.price), 0)
   , [order])

   const tipAmount = useMemo(() => 
      subtotalAmount * tip
   , [order, tip])

   const totalAmount = useMemo(() => 
      subtotalAmount + tipAmount
   , [order, tip])

   return (
      <>
         <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>
               Subtotal a pagar:
               <span className="font-bold ml-1">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>
               Propina:
               <span className="font-bold ml-1">{formatCurrency(tipAmount)}</span>
            </p>
            <p>
               Total a pagar:
               <span className="font-bold ml-1">{formatCurrency(totalAmount)}</span>
            </p>
         </div>

         <button 
            className="w-full bg-blue-500 text-white font-bold uppercase p-3 rounded-2xl shadow-md hover:bg-blue-600 hover:shadow-lg transition-colors disabled:bg-gray-400 disabled:shadow-none disabled:opacity-60"
            disabled={!totalAmount}
            onClick={placeOrder}
         >
            Guardar Orden
         </button>
      </>
   )
}