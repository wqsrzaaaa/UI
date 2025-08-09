import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import dept from '../../../Department.json';
import users from '../../../attorneys.json'
import { useNavigate } from 'react-router-dom';


const AdminDepartment = () => {
  const [error, seterror] = useState('')
  const [departments, setDepartments] = useState(dept);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignTo: [],
    img: '',
  });

  const handleAddDepartment = (e) => {
    e.preventDefault();
    const { assignTo } = formData;
    if (assignTo.length === 0 || !formData.img) {
      seterror('please fill all fields')
      return;
    }
    seterror('')
    setDepartments([...departments, formData]);
    setFormData({ title: '', description: '', assignTo: [], img: '' });
  };

  const handleAssign = (e) => {
    const selectedUser = e.target.value;
    if (!formData.assignTo.includes(selectedUser) && selectedUser !== "") {
      setFormData({
        ...formData,
        assignTo: [...formData.assignTo, selectedUser],
      });
    }
    e.target.value = "";
  };

  const removeAssignee = (name) => {
    setFormData({
      ...formData,
      assignTo: formData.assignTo.filter((person) => person !== name),
    });
  };

  const navigate = useNavigate()



  return (
    <div className="p-10 bg-gray-100 min-h-screen overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6">Departments</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full  pb-10"
      >
        {departments.map((dept, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate('/admin/department/edit-departments', { state: dept })}
              className="group relative cursor-pointer w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={dept.img} alt="" className="w-full h-full object-cover" />
              <h3 className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[rgb(148,28,30)] text-3xl tracking-widest w-full font-bold text-center px-2">
                {dept.title}
              </h3>
              <div className="absolute bottom-0 flex justify-center items-end text-center text-lg left-0 w-full h-0 group-hover:h-45 transition-all duration-300 bg-black/60 text-white px-2 overflow-hidden">
                <p className="pb-3">{dept.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      <div className="mt-10  p-6 rounded-xl max-w-xl">
        <h3 className="text-xl font-semibold mb-4 text-[rgb(148,28,30)]">Add New Department</h3>
        <form onSubmit={handleAddDepartment} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Department Title"
            className="w-full border px-4 py-2 rounded"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <textarea
            required
            placeholder="Description"
            className="w-full border px-4 py-2 rounded"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <select
            className="w-full border px-4 py-2 rounded "
            onChange={handleAssign}
          >
            <option value="">Assign to</option>
            {users.map((user, i) => (
              <option key={i} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>

          {formData.assignTo.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.assignTo.map((name, index) => (
                <span key={index} className="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-2">
                  {name}
                  <button
                    type="button"
                    onClick={() => removeAssignee(name)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}
          <div
            className="border   rounded-lg h-64 flex justify-center items-center relative cursor-pointer "
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData({ ...formData, img: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
            onClick={() => document.getElementById("imgUpload").click()}
          >
            {formData.img ? (
              <img src={formData.img} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-5xl">+</div>
                <p className="mt-2 text-sm">Click or drag an image here</p>
              </div>
            )}
            <input
              id="imgUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.startsWith("image/")) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData({ ...formData, img: reader.result });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          {error && <p className='text-red-600'>{error}</p>}


          <button
            type="submit"
            className="bg-[rgb(148,28,30)] text-white py-2 px-6 rounded cursor-pointer"
          >
            Add Department
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDepartment;
