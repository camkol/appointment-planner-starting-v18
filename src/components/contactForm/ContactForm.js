import React, { useState } from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="^[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}$"
          title="Phone number should be in the format: 123-456-7890"
        />
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};
