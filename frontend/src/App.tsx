import "./App.css";
import { mockEvents, Event } from "./data/mockData";
import { useState } from "react";
import { PartyCalculator } from "./components/PartyCalculator";
import { EventForm } from "./components/EventForm";
import EventList from "./components/EventList";

function App() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(
    undefined
  );

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleFormComplete = (newEvent?: Event) => {
    // Optional argument
    if (newEvent) {
      if (selectedEvent) {
        setEvents(
          events.map((event) => (event.id === newEvent.id ? newEvent : event))
        );
      } else {
        setEvents([...events, newEvent]);
      }
    }
    setSelectedEvent(undefined); // Reset selected event after form submission
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Party Planner
      </h1>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <div>
          <PartyCalculator />
          <EventForm
            eventToEdit={selectedEvent}
            onComplete={handleFormComplete}
          />
        </div>
        <div>
          <EventList onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
