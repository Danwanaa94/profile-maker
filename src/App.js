import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'

function App() {
const[allProfiles, setAllprofiles]=useState([
{
firstname:"Ama",
lastname:"Mensah",
email:"mensah@gmail.com",
phone:"0206532345"
}

])

const updateprofiles = (profile)=>{
let arr = allProfiles;
arr.push(profile)
setAllprofiles([...arr]);

};

  return (
    <div className='app'>
      <h1>Profile Maker</h1>
      <div>
    <ProfileForm submit={updateprofiles}/>
    <hr/>
    <div className='list'>
     {allProfiles.map((person,index)=>(
       <ProfileCard key={index} card={person}/>
     ))}

    </div>
    </div>
    </div>
  )
}

export default App