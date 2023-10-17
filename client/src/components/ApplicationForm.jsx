import React, { useEffect, useState } from "react";
import { formatRecruitmentDate } from "../utils/helper";

const ApplicationForm = ({
  onFormSubmit,
  onUpdate,
  isPopupVisible,
  togglePopup,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    patient_id: "",
    name: "",
    age: "",
    gender: "",
    condition: "",
    recruitmentDate: "",
    location: "",
    registeredGP: "",
    phoneNumber: "",
  });
  useEffect(() => {
    console.log("Initial Data:", initialData);
    if (initialData) {
      setFormData(initialData);
    } else {
      resetForm();
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    resetForm();
    togglePopup();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(formData);

    togglePopup();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      patient_id: "",
      name: "",
      age: "",
      gender: "",
      condition: "",
      recruitmentDate: "",
      location: "",
      registeredGP: "",
      phoneNumber: "",
    });
  };

  const formattedDate = formatRecruitmentDate(formData.recruitmentDate);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isPopupVisible ? "visible" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add Patient Detail
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              className="mb-4 p-2 w-full border rounded-md"
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Age
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="number"
              placeholder="Enter age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="text"
              placeholder="Enter gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Condition
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="text"
              placeholder="Enter condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Recruitment Date
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="date"
              placeholder="Enter Recruitment Date"
              name="recruitmentDate"
              value={formattedDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="text"
              placeholder="Enter location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Registered GP
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="text"
              placeholder="Enter the registered GP"
              name="registeredGP"
              value={formData.registeredGP}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              className="mb-4 p-2 w-full border rounded"
              type="text"
              placeholder="Enter phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 flex justify-center gap-5">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-32"
              onClick={togglePopup}
            >
              Close
            </button>
            {initialData ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
                onClick={handleUpdate}
              >
                Update Detail
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
                onClick={handleSubmit}
              >
                Add Detail
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
