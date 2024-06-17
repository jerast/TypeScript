export type Guitar = {
   id : number
   name : string
   image : string
   description : string
   price : number
}

export type CartItem = Guitar & {
   quantity: number
}

/* Pick one or more specific props of a type

   export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
      quantity: number
   }

   // id, name, price, quantity
   
*/

/* Omit one or more specific props of a type

   export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
      quantity: number
   }

   // image, description, quantity
   
*/