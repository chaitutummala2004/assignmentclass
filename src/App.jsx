import { Profiler, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LeftSideBar from "./components/layout/LeftSideBar";
import RightSideBar from "./components/layout/RightSideBar";
import UserProfile from "./components/props/UserProfile";
import Parent from "./components/props/propsAsMethod/Parent";
import ChildrenContainer from "./components/props/ChildrenContainer";
import SingleCounter from "./components/state/SingleCounter";
import ArrayWithKeyAsIndex from "./components/listRendering/ArrayWithKeyAsIndex";
import ArrayWithoutKey from "./components/listRendering/ArrayWithoutKey";
import IndexAsKeyIssue from "./components/listRendering/IndexAsKeyIssue";
import ObjectWithIdAsKey from "./components/listRendering/ObjectWithIdAsKey";
import ObjectWithoutId from "./components/listRendering/ObjectWithoutId";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import ProfileForm from "./components/forminputs/ProfileForm";
import Profile from "./components/forminputs/profile";

function App() {
  return (
    <>
       {/* Basic Layout 
       <Header />

      <div className="main-content">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </div>

      <Footer />  */}
      

      {/* props example */}
      {/* <section className="profile-card">
        <UserProfile
          name="Dineshkumar"
          age={33}
          email="dinesh@gmail.com"
          address="Chennai"
        />
        <UserProfile
          name="Divya Dineshkumar"
          age={30}
          email="divya@gmail.com"
          address="Chennai"
        />
        <UserProfile
          name="Darwin Divya Dinesh"
          age={3}
          email="ddd@gmail.com"
          address="Chennai"
        />
      </section> */}

      {/* props as method */}
      {/* <Parent /> */}


<Profile/>


      {/* children */}
      {/* <ChildrenContainer name="Dineshkumar">
        <h3>Welcome to Dashboard</h3>
        <p>This area is to display the main features</p>
      </ChildrenContainer>

      <ChildrenContainer name="Dineshkumar">
        <h3>Welcome to Profile</h3>
        <p>This area is to display the user profile details</p>
        <p>Manage your preferences and edit your profile at ease</p>
      </ChildrenContainer> */}

      {/* state
      <SingleCounter initialvalue={0} /> */}
      {/* <ConditionalRendering isLoggedIN={false}/>
      list rendering
      <div className="list-rendering">
        <h1>React List Rendering Examples</h1>
        <ArrayWithoutKey />
        <ArrayWithKeyAsIndex />
        <ObjectWithIdAsKey />
        <ObjectWithoutId />
        <IndexAsKeyIssue />
        
      </div> */}
      
       
    </>
  );
}

export default App;
