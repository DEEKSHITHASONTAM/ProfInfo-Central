import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import NavBar from "./pages/NavBar";
import DataTable from "./pages/LogOut";
import NewProject from "./pages/NewProject";
import Faculty from "./pages/Faculty"
import Login from "./pages/Login";
import Project_list_prof from "./pages/Project_list_prof";
import Cse from "./components/Faculty/department/Cse";
import Ce from "./components/Faculty/department/Ce";
import Ee from "./components/Faculty/department/Ee";
import Prof from "./components/Faculty/Prof";
// import Login from "./pages/Login";

function App() {
  var isWho = "user";
 const isAuthorized = true;
     if(isAuthorized){
      return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar who={isWho} />}>
              <Route index element={<Project_list_prof />} />
              <Route path="DataTable" element={<DataTable />} />
              <Route path="Login" element={<Login />} />
              <Route path="NewProject" element={<NewProject />} />
              <Route path="Faculty" element={<Faculty />}>
  
              <Route path="Cse" element={<Cse />} />
              <Route path="Ee" element={<Ee />} />
              <Route path="Ce" element={<Ce />} />
    
               </Route>
              <Route path="ContactUs" element={<ContactUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </>
      )
     }

     else{
      return(
        <Login />
      )
     
     }
   
 }

export default App;
