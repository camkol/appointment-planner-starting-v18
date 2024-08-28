import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          placeholder="Reason of appointment..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContactPicker
          name="contact"
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of appointment..."
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Time of appointment..."
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min={getTodayString()}
        />
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
