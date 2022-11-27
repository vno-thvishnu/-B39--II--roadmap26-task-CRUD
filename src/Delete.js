import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


function Delete({deleting,setData,setLoading}) {
  const {  id} = useParams();
//  console.log(deleting)

  // const person=deleting[id-1];
  const index = deleting.findIndex((x)=>x.id==id);
  const person = deleting[index];

let deleteData=async()=>{
  try {
    const dlt=await axios.delete
    (`https://636405f97b209ece0f3e9710.mockapi.io/data/${person.id}`)
    // setDelete(dlt.data)
    // console.log(dlt)
    alert("successfully deleted, Click back")

  } catch (error) {
    alert("Error")
  }
}

let ref = async()=>{
  try{
  setLoading(true)
  const getting = await axios.get("https://636405f97b209ece0f3e9710.mockapi.io/data");
  setData(getting.data) 
  setLoading(false)
  // console.log(getting.data)
  }catch(error){
    alert("ERROR")
  }
}
  return (
    <>
    <div className='createform'>
      <div className='contain2'>
        <div >
        <h2 style={{color:"red"}}>Delete profile</h2>
      <h4><b>Id:</b>{`${person.id}`}</h4>
      <h4><b>Name:</b>{`${person.name}`}</h4>
      <h4><b>Email:</b>{`${person.email}`}</h4>
      <p style={{color:"red"}}>Are you sure you want to delete profile</p>
<button class="btn btn-danger" onClick={deleteData}>Delete</button>
        </div>
      </div>
      
      
    </div>
    <div class="d-grid gap-2">
  <Link to='/' onClick={ref} class="btn btn-dark" type="button">Back</Link>
</div>
    </>
  )
}

export default Delete