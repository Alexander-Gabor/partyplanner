import { Event } from "../data/mockData";

type EventListProps = {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: number) => void;
};

const EventList = ({ events, onEdit, onDelete }: EventListProps) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-bold">{event.name}</p>
              <p className="text-gray-600">{event.occasion}</p>
              <p className="text-gray-500">{event.numGuests} Guests</p>
              <p className="text-gray-400">{event.date}</p>{" "}
              {/* Display date here */}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(event)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(event.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;