import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import ReactGA from 'react-ga';
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const {user,logOut}:any = useUserAuth();
  useEffect(()=>{
   ReactGA.pageview(window.location.pathname);
  },[]);
  console.log(user)
  const handleLogout =async()=>{
     try{
         await logOut();
         ReactGA.event({
            category:user.email,
            action:"test-action",
            label:"test-label",
            
        })
     }catch(err:any){
      console.log(err.message)
     }
  }
  return (
    <>
    <div className="p-4 box mt-3 text-center">
      Hello Welcome <br />
      {user && user.email}
    </div>
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  </>
);
};
  


export default Home