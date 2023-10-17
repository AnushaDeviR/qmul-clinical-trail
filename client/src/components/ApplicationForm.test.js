import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ApplicationForm from "./ApplicationForm";

test("calls onFormSubmit with correct data when form is submitted", () => {
  const mockOnFormSubmit = jest.fn();
  const mockTogglePopup = jest.fn();

  render(
    <ApplicationForm
      onFormSubmit={mockOnFormSubmit}
      togglePopup={mockTogglePopup}
    />
  );

  const nameInput = screen.getByPlaceholderText(/Enter name/i);
  const ageInput = screen.getByPlaceholderText(/Enter age/i);
  const genderInput = screen.getByPlaceholderText(/Enter gender/i);
  const conditionInput = screen.getByPlaceholderText(/Enter condition/i);
  const dateInput = screen.getByPlaceholderText(/Enter Recruitment Date/i);
  const locationInput = screen.getByPlaceholderText(/Enter location/i);
  const registeredGPInput = screen.getByPlaceholderText(
    /Enter the registered GP/i
  );
  const phoneNumberInput = screen.getByPlaceholderText(/Enter phone number/i);
  const submitButton = screen.getByText(/Add Detail/i);

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(ageInput, { target: { value: "30" } });
  fireEvent.change(genderInput, { target: { value: "Male" } });
  fireEvent.change(conditionInput, { target: { value: "Healthy" } });
  fireEvent.change(dateInput, { target: { value: "2023-10-17" } });
  fireEvent.change(locationInput, { target: { value: "New York" } });
  fireEvent.change(registeredGPInput, { target: { value: "Dr. Smith" } });
  fireEvent.change(phoneNumberInput, { target: { value: "123-456-7890" } });

  fireEvent.click(submitButton);

  expect(mockOnFormSubmit).toHaveBeenCalledWith({
    name: "John Doe",
    age: "30",
    gender: "Male",
    condition: "Healthy",
    recruitmentDate: "2023-10-17",
    location: "New York",
    registeredGP: "Dr. Smith",
    phoneNumber: "123-456-7890",
  });
});
