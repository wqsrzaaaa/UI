import { useNavigate } from 'react-router-dom'

const UserIdentity = () => {
  
  const navigate = useNavigate()

  return (
    <div className='w-full h-33 md:h-43 border-b-1 border-b-gray-400 flex items-center justify-between pl-5 md:pl-16 '>
      <h1 className='md:text-3xl text-xl font-bold'>Wellcome back,  <span className='text-[rgb(148,28,30)]'>User</span></h1>
       <div className='flex items-center gap-3'>
        <img 
        onClick={()=> navigate('/user/profile')}
        className='w-11 h-11 cursor-pointer object-center object-cover rounded-full'
        src="https://tse4.mm.bing.net/th/id/OIP.-duT7_pjhg_EQFC2Lec6IQHaFE?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <button className='bg-[rgb(148,28,30)] py-2 px-4 text-white rounded cursor-pointer mr-15'>Logout</button>
       </div>
    </div>
  )
}

export default UserIdentity