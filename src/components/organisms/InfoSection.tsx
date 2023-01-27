import { ViewMore } from "components/atoms";
import { InfoSectionAnnouncement } from "components/molecules";
import React, { FC } from "react";
import { Container } from "react-bootstrap";

const announcements = [
  {
    id: 1,
    announcement: "2022ウィンターコレクション発表のお知らせ",
    date: new Date("2022/10/01"),
  },
  {
    id: 2,
    announcement: "2022ウィンターコレクション発表のお知らせ",
    date: new Date("2022/10/01"),
  },
];

export const InfoSection: FC = () => {
  return (
    <Container>
      <span className="fs-2 text-dark libre-baskerville">Info</span>
      {announcements?.map((announcement) => (
        <React.Fragment key={announcement.id}>
          <InfoSectionAnnouncement announcement={announcement} />
        </React.Fragment>
      ))}
      <section className="text-center mt-4">
        <ViewMore href="/info" />
      </section>
    </Container>
  );
};
