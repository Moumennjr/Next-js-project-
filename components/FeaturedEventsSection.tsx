'use client';

import { useRef, useEffect } from 'react';
import posthog from 'posthog-js';
import EventCard from '@/components/EventCard';
import { events } from '@/lib/constants';

const FeaturedEventsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        // Synchronizing with the browser Intersection Observer API — valid useEffect usage
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    posthog.capture('featured_events_viewed', {
                        event_count: events.length,
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="mt-20 space-y-7" ref={sectionRef} id="events">
            <h3>Featured Events</h3>

            <ul className="events">
                {events.map(event => (
                    <li key={event.title}>
                        <EventCard {...event} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturedEventsSection;
