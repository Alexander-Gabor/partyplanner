import axios from "axios";
import { Event } from "../data/mockData";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const fetchEvents = async () => {
  const { data } = await api.get<Event[]>("/events");
  return data;
};

export const addEvent = async (event: Event) => {
  const { data } = await api.post<Event>("/events", event);
  return data;
};

export const updateEvent = async (event: Event) => {
  const { data } = await api.put<Event>(`/events/${event.id}`, event);
  return data;
};

export const deleteEvent = async (id: number) => {
  await api.delete(`/events/${id}`);
};
