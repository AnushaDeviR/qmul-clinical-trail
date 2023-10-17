import React, { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm";
import { formatRecruitmentDate } from "../utils/helper";

const PatientTable = () => {
  const [patientData, setPatientData] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formInitialData, setFormInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortedPatientData, setSortedPatientData] = useState([]);

  const GET_ALL_PATIENT_DETAILS_API =
    "http://localhost:8080/getAllPatientDetails";

  const ADD_PATIENT_DETAILS_API = "http://localhost:8080/addPatient";

  const UPDATE_PATIENT_DETAILS_API = (id) =>
    `http://localhost:8080/updatePatientById/${id}`;

  const DELETE_PATIENT_DETAILS_API = (id) =>
    `http://localhost:8080/deletePatientById/${id}`;

  const fetchData = async () => {
    try {
      const response = await fetch(GET_ALL_PATIENT_DETAILS_API);
      if (response.ok) {
        const data = await response.json();
        setPatientData(data);
      } else {
        console.error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [patientData]);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(ADD_PATIENT_DETAILS_API, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setPatientData([...patientData, result]);
        togglePopup();
      } else {
        console.error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error adding patient data:", error);
    }
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleUpdate = async (data) => {
    console.log(data);
    const patientToUpdate = patientData.find(
      (patient) => patient.patient_id === data.patient_id
    );

    console.log(patientToUpdate);

    if (patientToUpdate) {
      const updateApiUrl = UPDATE_PATIENT_DETAILS_API(
        patientToUpdate.patient_id
      );

      const response = await fetch(updateApiUrl, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const updatedPatient = await response.json();
      console.log(updatedPatient);

      setFormInitialData(updatedPatient);
      togglePopup();
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(DELETE_PATIENT_DETAILS_API(id), {
        method: "DELETE",
      });

      setPatientData((prevData) =>
        prevData.filter((patient) => patient.patient_id !== id)
      );
    } catch (error) {
      console.error("Error deleting patient data:", error);
    }
  };

  useEffect(() => {
    const sortedData = [...patientData].sort(
      (a, b) => {
        const dateA = new Date(a.recruitmentDate);
        const dateB = new Date(b.recruitmentDate);
        return dateA - dateB;
      },
      [patientData]
    );

    setSortedPatientData(sortedData);
  }, [patientData]);

  const onAddBtn = () => {
    togglePopup();
    setFormInitialData(null);
  };
  // [TODO: add error handling, empty response data]
  return (
    <div className="p-4">
      {isLoading && <p>Loading...</p>}

      {patientData.length === 0 && !isLoading && (
        <p>No patient data available.</p>
      )}

      {patientData.length > 0 && !isLoading && (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="table-border">Patient ID</th>
              <th className="table-border">Name</th>
              <th className="table-border">Age</th>
              <th className="table-border">Gender</th>
              <th className="table-border">Condition</th>
              <th className="table-border">Recruitment Date</th>
              <th className="table-border">Location</th>
              <th className="table-border">Registered General Practitioner</th>
              <th className="table-border">Phone Number</th>

              <th className="table-border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPatientData.map((patient, index) => {
              const formattedDate = formatRecruitmentDate(
                patient.recruitmentDate
              );
              return (
                <tr key={index}>
                  <td className="table-border" data-testid="patient-id">
                    {patient.patient_id}
                  </td>
                  <td className="table-border" data-testid="patient-name">
                    {patient.name}
                  </td>
                  <td className="table-border" data-testid="patient-age">
                    {patient.age}
                  </td>
                  <td className="table-border" data-testid="patient-gender">
                    {patient.gender}
                  </td>
                  <td className="table-border" data-testid="patient-condition">
                    {patient.condition}
                  </td>
                  <td className="table-border" data-testid="patient-date">
                    {formattedDate}
                  </td>
                  <td className="table-border" data-testid="patient-location">
                    {patient.location}
                  </td>
                  <td
                    className="table-border"
                    data-testid="patient-registeredGP"
                  >
                    {patient.registeredGP}
                  </td>
                  <td
                    className="table-border"
                    data-testid="patient-phoneNumber"
                  >
                    {patient.phoneNumber}
                  </td>
                  <td className="table-border">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-32 mb-5"
                      onClick={() => handleUpdate(patient)}
                    >
                      Update
                    </button>

                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-32"
                      onClick={() => handleDelete(patient.patient_id)}
                      data-testid="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
        onClick={onAddBtn}
      >
        Add New Patient
      </button>

      {isPopupVisible && (
        <ApplicationForm
          onFormSubmit={handleFormSubmit}
          onUpdate={handleUpdate}
          isPopupVisible={isPopupVisible}
          togglePopup={togglePopup}
          initialData={formInitialData}
        />
      )}
    </div>
  );
};

export default PatientTable;
