import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected">
        no contact selected
      </option>
      {contacts.map((contact) => {
        return(
          <option value={contact} key={contact}>
            {contact}
          </option>
        )
      })}
    </select>
  );
};