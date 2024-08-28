import React from "react";

export const ContactPicker = ({ contacts, onChange, contact, title }) => {
  return (
    <>
      <select onChange={onChange} value={contact} name={title}>
        <option value="" selected>
          No Contact Select
        </option>
        {contacts.map((cont) => {
          return (
            <option key={cont.name} value={cont.name}>
              {cont.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
