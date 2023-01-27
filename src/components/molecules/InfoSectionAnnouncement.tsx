import React, { FC, ReactNode, useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import { ColorVariant, InfoButton } from "components/atoms";
import { DateTime } from "luxon";

interface Props {
  announcement: {
    id: number;
    announcement: string;
    date: Date;
  };
}

export const InfoSectionAnnouncement: FC<Props> = ({ announcement }) => {
  const date = DateTime.fromJSDate(announcement.date).toFormat("yyyy/MM/dd");

  return (
    <div className="border-bottom mt-5" style={{ color: "#505A5F" }}>
      <section
        className="d-flex justify-content-between"
        style={{ fontSize: "1.15em" }}
      >
        <div>{announcement.announcement}</div>
        <InfoButton />
      </section>
      <div className="pb-3" style={{ fontSize: ".75em" }}>
        {date}
      </div>
    </div>
  );
};
