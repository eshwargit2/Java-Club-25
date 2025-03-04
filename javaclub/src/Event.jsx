import React from 'react'
import './Event.css'

const Event = () => {
  return (
    <div>
         <section id="events" class="events">
        <div class="section-title">
            <h2>Upcoming Events</h2>
            <p>Join our workshops and coding challenges.</p>
        </div>
        <div class="events-grid">
            <div class="event-card animate-hover">
                <img src="assets/event1.jpg" alt="Java Bootcamp"/>
                <div class="event-details">
                    <h3>Java Bootcamp</h3>
                    <p>Start your Java journey in 7 days.</p>
                    <a href="#" class="cta-button-small">Register Now</a>
                </div>
            </div>
          
        </div>
    </section>
    </div>
  )
}

export default Event