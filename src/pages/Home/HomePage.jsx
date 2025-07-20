import AllUsers from './AllUsers';
import FindUS from './FindUS';
import FirstHomePage from './FirstHomePage';
import OurTrust from './OurTrust';
import AllDepartments from '../Home/Departments/AllDepartments'

const HomePage = () => {
  return (
    <div >
       <FirstHomePage />
       <AllDepartments />
       <OurTrust />
       <AllUsers />
       <FindUS />
    </div>
  )
}

export default HomePage