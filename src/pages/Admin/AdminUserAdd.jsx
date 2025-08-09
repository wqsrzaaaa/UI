import React, { useState, useRef } from "react";
import departments from '../../../Department.json';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const AdminUserAdd = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profileImage: null,
    field: "",
    selectedDepartments: [],
    contact: "",
    description: "",
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));
    }
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));
    }
  };

  const handleDepartmentChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      selectedDepartments: checked
        ? [...prev.selectedDepartments, value]
        : prev.selectedDepartments.filter((dept) => dept !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-2xl p-13  space-y-6">
      <h2 className="text-3xl text-[rgb(148,28,30)] font-bold mb-4 text-center">Add New User</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="tel"
        name="contact"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />

      <div
        onClick={handleImageClick}
        onDrop={handleImageDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-90 h-45 border rounded flex items-center justify-center cursor-pointer bg-gray-100"
      >
        {formData.profileImage ? (
          <img
            src={URL.createObjectURL(formData.profileImage)}
            alt="Profile Preview"
            className="h-full object-cover rounded"
          />
        ) : (
          <span className="text-4xl text-gray-400">+</span>
        )}
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <div>
        <label className="block font-medium">Select Departments:</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {departments.map((dept) => (
            <label key={dept.title} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={dept.title}
                checked={formData.selectedDepartments.includes(dept.title)}
                onChange={handleDepartmentChange}
              />
              {dept.title}
            </label>
          ))}
        </div>
      </div>


      <div>
        <label className="font-semibold block mb-5">Description:</label>
        <ReactQuill
          theme="snow"
          value={formData.description}
          onChange={(val) =>
            setFormData((prev) => ({ ...prev, description: val }))
          }
          placeholder="Write description here..."
          className=" h-43"
        />
      </div>
      <button type="submit" className="w-full mt-8 bg-[rgb(148,28,30)] cursor-pointer text-white py-3 rounded-md font-medium">
        Submit
      </button>
    </form>
  );
};

export default AdminUserAdd;
