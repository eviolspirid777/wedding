import { Countdown } from "./components/Countdown";
import { DayProgram } from "./components/DayProgram";
import { DressCode } from "./components/DressCode";
import { RSVPForm } from "./components/RSVPForm";
import { VenueLocation } from "./components/VenueLocation";
import { WeddingDate } from "./components/WeddingDate";
import { WeddingInvitation } from "./components/WeddingInvitation";

export const App = () => {
  return (
    <div className="min-h-screen">
      {/* Приглашение */}
      <WeddingInvitation />

      {/* Дата свадьбы */}
      <WeddingDate />

      {/* Место торжества */}
      <VenueLocation />

      {/* Программа дня */}
      <DayProgram />

      {/* Дресс-код */}
      <DressCode />

      {/* Countdown */}
      <Countdown />

      {/* RSVP форма */}
      <RSVPForm />
    </div>
  );
};
