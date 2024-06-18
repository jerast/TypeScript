import type { MenuItem as MenuItemType } from "../types"

type MenuItemProps = {
	item: MenuItemType
   addItem: (item: MenuItemType) => void
}

export const MenuItem = ({ item, addItem } : MenuItemProps) => {

   const handleAddItem = () => {
      addItem(item)
   }

	return (
		<button 
         className="border-2 border-blue-100 bg-blue-50 p-3 flex justify-between rounded-md hover:border-blue-300 hover:bg-blue-200 hover:shadow-md w-full transition-all"
         onClick={handleAddItem}
      >
			<p>{item.name}</p>
			<p className="font-black">${item.price}</p>
		</button>
	)
}