import { useState } from 'react';

export const PartyCalculator = () => {
   const [numGuests, setNumGuests] = useState(0);
   const wineBottles = Math.ceil(numGuests / 5);
   const beerCans = Math.ceil(numGuests * 1.5);
   const snackBags = Math.ceil(numGuests / 3);

   return (
       <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-6">
           <h2 className="text-2xl font-semibold mb-4 text-center">Party Calculator</h2>
           <input
               type="number"
               value={numGuests}
               onChange={(e) => setNumGuests(parseInt(e.target.value))}
               className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Number of Guests"
           />
           <div className="text-lg">
               <p className="font-medium">You'll need:</p>
               <ul className="list-disc list-inside">
                   <li>{wineBottles} bottles of wine</li>
                   <li>{beerCans} cans of beer</li>
                   <li>{snackBags} bags of snacks</li>
               </ul>
           </div>
       </div>
   );
};