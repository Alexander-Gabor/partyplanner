import "./App.css";
import { useState } from "react";
import { PartyCalculator } from "./components/PartyCalculator";
import { EventForm } from "./components/EventForm";
import EventList from "./components/EventList";
import { Event } from "./data/mockData";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchEvents, addEvent, updateEvent, deleteEvent } from "./api/api";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const queryClient = useQueryClient();

  // Fetch events using `useQuery`
  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // Mutations
  const addMutation = useMutation({
    mutationFn: addEvent,
    onSuccess: () => {
      // Invalidate the query to refetch the event list
      queryClient.invalidateQueries(["events"]);
    },
    onError: (error: any) => {
      console.error("Error adding event:", error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      // Invalidate the query to refetch the event list
      queryClient.invalidateQueries(["events"]);
    },
    onError: (error: any) => {
      console.error("Error updating event:", error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      // Invalidate the query to refetch the event list
      queryClient.invalidateQueries(["events"]);
    },
    onError: (error: any) => {
      console.error("Error deleting event:", error);
    },
  });

  // Handlers
  const handleEdit = (event: Event) => setSelectedEvent(event);

  const handleFormComplete = (newEvent?: Event) => {
    if (newEvent) {
      selectedEvent
        ? updateMutation.mutate(newEvent)  // If editing an event, update it
        : addMutation.mutate(newEvent);    // If adding a new event, add it
    }
    setSelectedEvent(null);  // Reset selected event after form submission
  };

  const handleDelete = (id: number) => deleteMutation.mutate(id);

  // Render loading and error states
  if (isLoading) return <div>Loading events...</div>;
  if (error) return <div>Error loading events</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Party Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div>
          <PartyCalculator />
          <EventForm
            eventToEdit={selectedEvent}
            onComplete={handleFormComplete}
          />
        </div>
        <div>
          <EventList
            events={events}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
