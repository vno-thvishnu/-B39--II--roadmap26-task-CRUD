import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";



function Update({editing,setData,setLoading}) {
  const {  id} = useParams();
  //  console.log(deleting)
  
    // const person=deleting[id-1];
    const index = editing.findIndex((x)=>x.id==id);
    const person = editing[index];
    // console.log(person)

    const formik=useFormik({
      initialValues:{
        name:"",
        email:"",
      },
      onSubmit:async(values)=>{
        try {
          const edt=await axios.put
          
          (`https://636405f97b209ece0f3e9710.mockapi.io/data/${person.id}`,values)
          // console.log("hi")
          alert("successfully updated, Click back")
        }catch(error){
          alert("Error")
        }
      
      }
    })

useEffect(()=>{
  formik.setValues(person)
  // console.log(person)
  
},[])

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
     <div className="createform">

<div   className="contain ">

  <form className='col-lg-8'  >
      <div >
<h2 style={{color:"#0d6efd"}}>Update profile</h2>

          <div >
              <div className='form-group'>
                  <label>Name *</label>
                  <input name='name' 
                  value={formik.values.name}
                 onChange={formik.handleChange}

                  type={"text"}
                   className={`form-control
                  
                 `}/>
                 
              </div>
          </div>
          <div >
              <div className='form-group'>
                  <label>Email *</label>
                  <input name='email' 
                  value={formik.values.email}
                 onChange={formik.handleChange}
                  type={"text"} className={`form-control
                 
                  `}/>
                  
              </div>
          </div>
        
      </div>
  </form>
  
            <div style={{padding:"30px"}}>
              <input onClick={formik.handleSubmit} type={"submit"} className="btn btn-primary "/>
            </div> 

        
 </div>

 

</div>
<div class="d-grid gap-2">
<Link to='/' onClick={ref} class="btn btn-dark" type="button">Back</Link>
</div>


    </>
  )
}

export default Update