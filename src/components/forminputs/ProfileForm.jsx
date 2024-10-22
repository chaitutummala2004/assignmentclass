import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

function ProfileForm({ addProfile }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    // Pass formData to the addProfile function passed from the parent component
    addProfile(formData);
    // Reset the form fields after submission
    setFormData({ name: "", age: "", occupation: "" });
  };

  return (
    <FormWrapper>
      <form className="profile-form" onSubmit={handleForm}>
        <FormTitle>Profile Form</FormTitle>
        <InputField
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="age"
          value={formData.age}
          placeholder="Age"
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="occupation"
          value={formData.occupation}
          placeholder="Occupation"
          onChange={handleChange}
        />
        <SubmitButton type="submit">Add Profile</SubmitButton>
      </form>
    </FormWrapper>
  );
}

export default ProfileForm;
