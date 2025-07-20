import React, { useState } from 'react';
import FindUS from './FindUS';

const Contact = () => {

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
  "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const departments = [
  "Patents", "Trademarks", "Copyrights", "Internet Law", "Counseling and Licensing"
];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    department: '',
    purpose: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
       <div className="w-full mt-25  p-6 flex flex-col lg:flex-row gap-10 items-start justify-center">
      
      <div className="w-full lg:w-1/2 h-full mt-15 flex justify-center flex-col gap-3 text-gray-700">
        <h2 className="text-2xl font-bold text-[rgb(148,28,30)] mb-4">Mail All Correspondence To</h2>
        <p className="mb-4">
          <strong>Loza and Loza LLP</strong><br />
          305 N. Second Avenue, #127<br />
          Upland, CA 91786, U.S.A.
        </p>
        <h3 className="font-semibold text-[rgb(148,28,30)] text-lg mb-2">Phone / Fax</h3>
        <p>Main Line: (877) 406-5164</p>
        <p>Patent Questions: (877) 477-4332</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2  flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded"
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded"
        >
          <option value="">Select Country</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>{country}</option>
          ))}
        </select>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded"
        />

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded"
        >
          <option value="">Select Department</option>
          {departments.map((dept, idx) => (
            <option key={idx} value={dept}>{dept}</option>
          ))}
        </select>

        <textarea
          name="purpose"
          placeholder="Purpose of Contacting"
          rows={4}
          value={formData.purpose}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded resize-none"
        />

        <button
          type="submit"
          className="bg-[rgb(148,28,30)] text-white py-3 rounded hover:bg-red-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>

      <FindUS/>
    </>
  );
};

export default Contact;
