import { useState } from "react";
import { addEvent, updateEvent, Event } from "../data/mockData";

type EventFormProps = {
   eventToEdit?: Event;
   onComplete: () => void;
};

export const EventForm = ({ eventToEdit, onComplete }: EventFormProps) => {
   const [name, setName] = useState(eventToEdit?.name || '');
   const [date, setDate] = useState(eventToEdit?.date || '');
   const [occasionType, setOccasionType] = useState(eventToEdit?.occasionType || '');

   const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       const eventData: Event = { id: eventToEdit?.id || 0, name, date, occasionType };
       (eventToEdit ? updateEvent(eventData) : addEvent(eventData)).then(onComplete);
   };

   return (
       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
           <h3 className="text-xl font-semibold mb-4">{eventToEdit ? 'Edit Event' : 'Add Event'}</h3>
           <div className="mb-4">
               <label className="block text-gray-700">Event Name</label>
               <input
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Event Name"
               />
           </div>
           <div className="mb-4">
               <label className="block text-gray-700">Date</label>
               <input
                   type="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}
                   className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
           </div>
           <div className="mb-6">
               <label className="block text-gray-700">Occasion Type</label>
               <input
                   type="text"
                   value={occasionType}
                   onChange={(e) => setOccasionType(e.target.value)}
                   className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                   placeholder="Occasion Type"
               />
           </div>
           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
               {eventToEdit ? 'Update Event' : 'Add Event'}
           </button>
       </form>
   );
};