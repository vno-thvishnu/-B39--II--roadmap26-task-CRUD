import axios from 'axios';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

import React from 'react'
import create from './assets/create.jpg'

function Create({setData,setLoading}) {

  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",

    },

    validate:(values)=>{
      let error={};
      if (values.name ===""){
        error.name= "please enter a value"
      }
      if(values.name && (values.name.length <=2 ||values.name.length>15)){
        error.name="Username must be between 3 to 15 character";
      }
      if (values.email === "") {
        error.email = " please enter a email";
      }

      if (
        values.email &&
        (values.email.length <= 2 || values.email.length > 25)
      ) {
        error.email = "email should not between 3 to 25 characters ";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-z]{2,4}$/i.test(values.email)
      ) {
        error.email = " please enter a valid email";
      }
      return error;
    },
    onSubmit: async(values)=>{
      try{
        const createDate = await axios.post
        ("https://636405f97b209ece0f3e9710.mockapi.io/data",values);
        alert("success")
      }catch(error){
        alert("Error");
      }
     console.log("hi")

    },

 
  })
  
  const ref= async() => {
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
  <h2 style={{color:"#ffc107"}}>create profile</h2>

    <form className='col-lg-8'  >
        

            <div >
                <div className='form-group'>
                    <label>Name *</label>
                    <input name='name' 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    type={"text"}
                     className={`form-control
                     ${
                      formik.touched.name && formik.errors.name ? "error-box" : ""
                    }
                    ${
                      formik.touched.name && !formik.errors.name
                        ? "success-box"
                        : ""
                    }
                   `}/>
                    {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name} </span>
              ) : null}
                </div>
            </div>
            <div >
                <div className='form-group'>
                    <label>Email *</label>
                    <input name='email' 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type={"text"} className={`form-control
                    ${
                      formik.touched.email && formik.errors.email ? "error-box" : ""
                    }
                    ${
                      formik.touched.email && !formik.errors.email
                        ? "success-box"
                        : ""
                    }
                    `}/>
                     {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email} </span>
              ) : null}
                </div>
            </div>
          
        
    </form>
    
              <div className="form-group" style={{padding:"30px"}}>
                <input  onClick={formik.handleSubmit} type={"submit"} className="btn btn-warning "/>
              </div> 

              
   </div>

   <div style={{paddingTop:"10px"}}>
    <img style={{width:"500px",height:"500px" }} src={create}/>
   </div>

  </div>
  <div class="d-grid gap-2">
  <Link to='/' class="btn btn-dark" type="button" onClick={ref}>Back</Link>
</div>


    </>
  )
}

export default Create