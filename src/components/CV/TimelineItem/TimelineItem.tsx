import React from "react";
import "./TimelineItem.css";

type TimelineItemProps = {
  title: string;
  location?: string;
  period?: string;
  children: React.ReactNode;
};

const TimelineItem = ({
  title,
  location,
  period,
  children,
}: TimelineItemProps) => {
  return (
    <article className="cv-timeline-item">
      <span className="cv-timeline-dot" aria-hidden="true" />

      <div className="cv-timeline-heading">
        <h3>{title}</h3>

        {location && (
          <>
            <span className="cv-timeline-separator">—</span>

            <span className="cv-timeline-location">{location}</span>
          </>
        )}

        {period && (
          <>
            <span className="cv-timeline-period-separator">|</span>

            <time>{period}</time>
          </>
        )}
      </div>

      <p>{children}</p>
    </article>
  );
};

export default TimelineItem;
