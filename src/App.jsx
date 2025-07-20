import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Component/Nav';

// Home & Departments
import HomePage from './pages/Home/HomePage';
import Patent from './pages/Home/Departments/Patent';
import TradeMarket from './pages/Home/Departments/TradeMarket';
import CopyRight from './pages/Home/Departments/CopyRight';
import Counsuling from './pages/Home/Departments/Counsuling';
import InternetLaw from './pages/Home/Departments/InternetLaw';
import Litigation from './pages/Home/Departments/Litigation';

// User & Admin Pages
import UserHome from './pages/UserPage/UserHome';
import AdminHome from './pages/Admin/AdminHOme';
import AdminUser from './pages/Admin/AdminUser';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUserVIew from './pages/Admin/AdminUserVIew';
import CreateTools from './pages/Admin/CreateTools';
import AdminDepartment from './pages/Admin/AdminDepartment';
import Footer from './Component/Footer';
import Contact from './pages/Home/Contact';

const AppWrapper = () => {
  const location = useLocation();

  const shouldHideNav = location.pathname.startsWith('/admin') || location.pathname.startsWith('/user');


  return (
    <>
      {!shouldHideNav && <Nav />}

      <Routes>
        <Route path="/user" element={<UserHome />} />

        <Route path="/admin" element={<AdminHome />}>
          <Route index element={<AdminDashboard />} />
          <Route path="user" element={<AdminUser />} />
          <Route path="create-tool" element={<CreateTools />} />
          <Route path="department" element={<AdminDepartment />} />
          <Route path="user/view/:id" element={<AdminUserVIew />} />
        </Route>


        <Route path="/" element={<HomePage />}>
          <Route index element={<Patent />} />
          <Route path="trademark" element={<TradeMarket />} />
          <Route path="copyright" element={<CopyRight />} />
          <Route path="counseling-license" element={<Counsuling />} />
          <Route path="internet-law" element={<InternetLaw />} />
          <Route path="litigation" element={<Litigation />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {!shouldHideNav && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default App;
