Party Planner App

Overview

Party Planner is a full-stack app to manage event details. Users can add, view, edit, and delete events. It uses a Spring Boot backend with a PostgreSQL database and a React frontend connected via REST APIs.

Project Structure

Backend: Spring Boot REST API
CRUD operations for Event entity (name, occasion, date, guest count).
Endpoints: /api/events for basic operations.
Database: PostgreSQL
Frontend: React, TypeScript, Tailwind CSS
Components:
EventForm: Add/Edit event details.
EventList: View, edit, and delete events.

Prerequisites

Java 17
Node.js & npm
PostgreSQL
Setup


Backend:
Update application.properties with PostgreSQL credentials.
Run:
cd backend
./mvnw spring-boot:run

Frontend:
cd frontend
npm install
npm run dev
Usage

Access the app at http://localhost:5173.
Use the form to create events and the list to manage them.
This setup will have both the backend (localhost:8080) and frontend (localhost:5173) running and ready for use :)