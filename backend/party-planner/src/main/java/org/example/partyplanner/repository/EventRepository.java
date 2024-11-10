package org.example.partyplanner.repository;

import org.example.partyplanner.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long>{
}