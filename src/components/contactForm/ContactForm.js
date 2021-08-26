import React from "react";

export const ContactForm = ({name, setName, phone, setPhone, email, setEmail, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          name="name" 
          value={name} 
          onChange={(e) => {setName(e.target.value)}} 
          required
          placeholder="Enter Contact Name"
        />
      </label>
      <br />
      <label>
        <input 
          type="tel" 
          name="phone"
          placeholder="(123) 456-7890" 
          pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" 
          value={phone} onChange={(e) => {setPhone(e.target.value)}}
          required
        />
      </label>
      <br />
      <label>
        <input 
          type="email" 
          name="email"
          value={email} 
          onChange={(e) => {setEmail(e.target.value)}}
          required
          placeholder="Enter Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact"/>
    </form>
  )
};