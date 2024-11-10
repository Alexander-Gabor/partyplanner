export type Event = {
    id: number;
    name: string;
    date: string;
    occasionType: string;
 };
 
 export const mockEvents: Event[] = [
    { id: 1, name: "Birthday Bash", date: "2024-12-01", occasionType: "Birthday" },
    { id: 2, name: "New Year's Eve", date: "2024-12-31", occasionType: "Celebration" },
    { id: 3, name: "Wedding Party", date: "2025-01-15", occasionType: "Wedding" },
 ];
 
 export const getEvents = () => Promise.resolve(mockEvents);
 
 export const addEvent = (newEvent: Event) => {
    mockEvents.push({ ...newEvent, id: mockEvents.length + 1 });
    return Promise.resolve(newEvent);
 };
 
 export const updateEvent = (updatedEvent: Event) => {
    const index = mockEvents.findIndex((event) => event.id === updatedEvent.id);
    if (index >= 0) mockEvents[index] = updatedEvent;
    return Promise.resolve(updatedEvent);
 };
 
 export const deleteEvent = (id: number) => {
    const index = mockEvents.findIndex((event) => event.id === id);
    if (index >= 0) mockEvents.splice(index, 1);
    return Promise.resolve();
 };
 