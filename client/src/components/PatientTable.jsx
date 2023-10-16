import React, { useEffect, useState } from "react";

const PatientTable = () => {
  const [patientData, setPatientData] = useState([]);
  const GET_ALL_PATIENT_DETAILS_API =
    "http://localhost:8080/getAllPatientDetails";

  const fetchData = async () => {
    const response = await fetch(GET_ALL_PATIENT_DETAILS_API);
    const data = await response.json();
    setPatientData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(patientData);

//   [TODO: add a form to allow users to insert new patient data]
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Condition</th>
            <th>Recruitment Date</th>
            <th>Location</th>
            <th>Registered General Practitioner</th>
            <th>Phone Number</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient, index) => (
            <tr key={index}>
              <td>{patient.patient_id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.condition}</td>
              <td>{patient.recruitment_date}</td>
              <td>{patient.location}</td>
              <td>{patient.registered_gp}</td>
              <td>{patient.phone_number}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
