import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PatientTable from "./PatientTable";

describe("PatientTable Component", () => {
  it("renders loading state", async () => {
    render(<PatientTable />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders no patient data available message", async () => {
    render(<PatientTable />);
    await waitFor(() => {
      expect(
        screen.getByText("No patient data available.")
      ).toBeInTheDocument();
    });
  });

  it("renders patient data correctly", async () => {
    const mockData = [
      {
        patient_id: 1,
        name: "John Doe",
        age: 30,
        gender: "Male",
        condition: "Healthy",
        recruitmentDate: "2023-01-15T00:00:00Z",
        location: "City",
        registeredGP: "Dr. Smith",
        phoneNumber: "1234567890",
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
        ok: true,
      })
    );

    render(<PatientTable />);

    await waitFor(() => {
      expect(screen.getByTestId("patient-id")).toHaveTextContent("1");
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-name")).toHaveTextContent("John Doe");
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-age")).toHaveTextContent("30");
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-gender")).toHaveTextContent("Male");
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-condition")).toHaveTextContent(
        "Healthy"
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-date")).toHaveTextContent(
        "2023-01-15"
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-location")).toHaveTextContent("City");
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-registeredGP")).toHaveTextContent(
        "Dr. Smith"
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("patient-phoneNumber")).toHaveTextContent(
        "1234567890"
      );
    });
  });

  it("handles form submission", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        ok: true,
      })
    );

    render(<PatientTable />);
  });
});
