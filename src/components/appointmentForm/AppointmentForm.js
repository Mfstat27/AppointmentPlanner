import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

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
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContacts = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          name="title"
          placeholder="Appointment Title"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
          required
        />
      </label>
      <br />
      <label>
        <input 
          type="date"
          name="date"
          value={date}
          onChange={(e) => {setDate(e.target.value)}}
          min={getTodayString()}
          required
        />
      </label>
      <br />
      <label>
        <input 
          type="time"
          name="time"
          value={time}
          onChange={(e) => {setTime(e.target.value)}}
          required
        />
      </label>
      <br />
      <ContactPicker 
        name="contact"
        value={contact}
        contacts={getContacts()}
        onChange={(e) => {setContact(e.target.value)}}
        placeholder="Who is going?"
      />
      <br />
      <input type="submit" value="Create Appointment" />
    </form>
  );
};