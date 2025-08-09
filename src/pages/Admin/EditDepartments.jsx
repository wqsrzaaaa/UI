import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import users from '../../../attorneys.json'


const EditDepartments = () => {

  const location = useLocation();
  const data = location.state;

  const [formData, setFormData] = useState({
    title: data.title || '',
    description: data.description || '',
    assignTo: data.assignTo || '',
    img: data.img || '',
    users: data.users || [],
  });

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    img: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUserChange = (e) => {
    setNewUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.img) return;

    const alreadyExists = formData.users.some(u => u.email === newUser.email);
    if (alreadyExists) return alert("User already added.");

    setFormData(prev => ({
      ...prev,
      users: [...prev.users, newUser]
    }));

    setNewUser({ name: '', email: '', img: '' });
  };


  const removeUser = (email) => {
    setFormData(prev => ({
      ...prev,
      users: prev.users.filter(user => user.email !== email)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Department Data:', formData);
  };

  return (




    <div className=" p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Department</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex justify-evenly gap-9 w-full'>
          <div className='flex-col w-100 gap-4'>
            <img
              className='w-100 h-70 object-center object-cover mb-4'
              src={formData.img}
              alt=""
            />
            <div>
              <h3 className="font-semibold mt-4 mb-2">Assigned Users</h3>
              {formData.users.map(user => (
                <div key={user.email} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
                  <div className="flex items-center gap-2">
                    <img src={user.img} alt={user.name} className="w-12 h-12 object-center object-cover rounded-full" />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeUser(user.email)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Add New User</h3>

              <select
                value={newUser.name}
                onChange={(e) => {
                  const selected = users.find(u => u.name === e.target.value);
                  if (selected) {
                    setNewUser({
                      name: selected.name,
                      email: selected.email,
                      img: selected.img,
                    });

                  }
                }}
                className="w-full border p-2 rounded mb-3"
              >
                <option value="">Select a user</option>
                {users.map((user, i) => (
                  <option key={i} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={addUser}
                className="bg-[rgb(148,28,30)] text-white px-4 py-2 rounded cursor-pointer"
              >
                Add User
              </button>
            </div>

          </div>
          <div className='flex-col  w-100 '>
            <div className='my-7 '>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border min-h-43 p-2 rounded"
                rows="4"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[rgb(148,28,30)] text-white px-6 py-2 rounded cursor-pointer mt-6"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditDepartments;
