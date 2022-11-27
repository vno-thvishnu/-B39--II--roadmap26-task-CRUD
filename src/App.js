
import './App.css';
import './design.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Topbar from './Topbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Tables from './Tables';
import Pagelayout from './Pagelayout';
import View from './View';
import Update from './Update';
import Delete from './Delete';
import { useEffect, useState } from 'react';
import Create from './Create';
import axios from "axios";



// const value = [
//   {
//       "id": "1",
//       "name": "Lura Senger",
//       "email": "Xander_Collier@yahoo.com"
//   },
//   {
//       "id": "2",
//       "name": "Wilburn Weber",
//       "email": "Bennett_Kreiger11@yahoo.com"
//   },
//   {
//       "id": "3",
//       "name": "Tyrique Hahn",
//       "email": "Juston.Altenwerth@yahoo.com"
//   },
//   {
//       "id": "4",
//       "name": "Lenny Bailey",
//       "email": "Guiseppe_Hegmann@yahoo.com"
//   },
//   {
//       "id": "5",
//       "name": "Vladimir Keeling",
//       "email": "Louisa_Walsh18@hotmail.com"
//   },
//   {
//       "id": "6",
//       "name": "Kellie Crona",
//       "email": "Chandler_Abernathy@yahoo.com"
//   },
//   {
//       "id": "7",
//       "name": "Carolina White",
//       "email": "Royal50@hotmail.com"
//   },
//   {
//       "id": "8",
//       "name": "Alfredo Conn",
//       "email": "Clarabelle34@hotmail.com"
//   },
//   {
//       "id": "9",
//       "name": "Stan Shanahan",
//       "email": "Lamar.McClure@hotmail.com"
//   },
//   {
//       "id": "10",
//       "name": "Marvin Fay",
//       "email": "Osbaldo58@hotmail.com"
//   },
//   {
//       "id": "11",
//       "name": "Torrance Rau",
//       "email": "Orin45@gmail.com"
//   },
//   {
//       "id": "12",
//       "name": "Harold Gutmann MD",
//       "email": "Alyce.Stracke37@yahoo.com"
//   },
//   {
//       "id": "13",
//       "name": "Taryn Torphy",
//       "email": "Dean_Breitenberg71@hotmail.com"
//   },
//   {
//       "id": "14",
//       "name": "Bryana Lang",
//       "email": "Tatum.Ullrich@yahoo.com"
//   },
//   {
//       "id": "15",
//       "name": "Nyasia Green DDS",
//       "email": "Dino83@gmail.com"
//   },
//   {
//       "id": "16",
//       "name": "Nasir Gerhold",
//       "email": "Lilian_Bashirian8@hotmail.com"
//   },
//   {
//       "id": "17",
//       "name": "Raymundo Ritchie PhD",
//       "email": "Antwan.Schoen15@yahoo.com"
//   },
//   {
//       "id": "18",
//       "name": "Delmer Marvin",
//       "email": "Kiera62@yahoo.com"
//   },
//   {
//       "id": "19",
//       "name": "Rachel Wilkinson",
//       "email": "Foster_Conroy@gmail.com"
//   },
//   {
//       "id": "20",
//       "name": "Gladys Howell",
//       "email": "Constance.Labadie10@yahoo.com"
//   },


// ]



  
function App() {
   const [data,setData]=useState([]);
    const [isLoading, setLoading] = useState(false);
  
  
   useEffect(() => {
       fetchData()
  }, [])
  
  let fetchData = async()=>{
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
    
    <BrowserRouter>
    <Routes>
    {/* <Route path="/"element={<Pagelayout/>}> */}
      <Route path="/" element={<Tables passing={data} loading={isLoading}/>}></Route>
       <Route path="/view/:id" element={<View passing={data} />}></Route> 
      <Route path="/delete/:id" element={<Delete deleting={data} setLoading={setLoading} setData={setData} />}></Route> 
      <Route path="/create" element={<Create setData={setData} setLoading={setLoading} />}></Route>


      {/* <Route path="/" element={<Tables />}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/view/:id" element={<View/>}></Route>
      <Route path="/delete/:id" element={<Delete />}></Route> */}

      <Route path="/update/:id" element={<Update editing={data} setLoading={setLoading} setData={setData}/>}></Route>


    
      {/* </Route>  */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
