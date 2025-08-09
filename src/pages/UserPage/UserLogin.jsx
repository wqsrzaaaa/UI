import React, { useState } from 'react';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return setError('Please fill in both fields');
    }

    // Simulate login logic
    console.log('Login Success:', formData);
    alert("Login successful!");

    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className=" p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[rgb(148,28,30)] text-white p-2 rounded "
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <a href="/user/signup" className="text-[rgb(148,28,30)] underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
