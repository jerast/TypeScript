const tipOptions = [
   {
     id: 'tip-0',
     value: 0,
     label: '0%'
   },
   {
     id: 'tip-10',
     value: .10,
     label: '10%'
   },
   {
     id: 'tip-20',
     value: .20,
     label: '20%'
   },
   {
     id: 'tip-50',
     value: .50,
     label: '50%'
   },
]

type TipPercentageFormProps = {
   tip: number
   setTip: React.Dispatch<React.SetStateAction<number>>
}

export const TipPercentageForm = ({ tip, setTip } : TipPercentageFormProps) => {
   return (
      <div>
         <h3 className="font-black text-2xl">Propina:</h3>
         <form>
            {
               tipOptions.map(tipOption => (
                  <label 
                     key={tipOption.id}
                     className="flex gap-2"
                  >
                     <span>{tipOption.label}</span>
                     <input 
                        type="radio" 
                        name="tip"
                        checked={tipOption.value === tip}
                        value={tipOption.value}
                        onChange={event => setTip(+event.target.value)}
                     />
                  </label>
               ))
            }
         </form>
      </div>
   )
}