import axios from 'axios';

export const fetchEvents = async () => {
   const { data } = await axios.get('/api/events');
   return data;
};

export const addEvent = async (event) => {
   const { data } = await axios.post('/api/events', event);
   return data;
};

export const updateEvent = async (event) => {
   const { data } = await axios.put(`/api/events/${event.id}`, event);
   return data;
};

export const deleteEvent = async (id) => {
   await axios.delete(`/api/events/${id}`);
};
