import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'




function View({passing}) {
  const { id } = useParams();
 
// console.log(passing)
// const person=passing[id-1];

const index = passing.findIndex((x)=>x.id==id);
  const person = passing[index];
    return (
    <>
<div className='viewbox'>

<div className='profile'>
    <h1 style={{color:"green"}}>PROFILE</h1>
    <h3><b>Id :</b>{`${person.id}`}</h3>
    <img
          className="img-fluid"
          src="https://picsum.photos/300/200?"
        />
    <h4><b>Name :</b>{`${person.name}`}</h4>
    <h4><b>Email :</b>{`${person.email}`}</h4>

    </div>

{/* <div className='backbutton'>
<Link  to="/" className=" btn btn-secondary mr-1">Back</Link> 

</div> */}

</div>
<div class="d-grid gap-2">
  <Link to='/' class="btn btn-dark" type="button">Back</Link>
</div>
    </>
  )
}

export default View;