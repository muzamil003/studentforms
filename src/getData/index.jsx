import React, { useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import db from '../Firebase/Auth';
import { Button } from '@mui/material';



const GetData = () => {
const [data ,setData]=useState([])


const getData= async() =>{

    const  querySnapshot = await getDocs(collection(db, "student"));
querySnapshot.forEach((doc) => {
    
  console.log(doc.data());
  data.push(doc.data());
//   setData(doc.data())
  console.log(data);
  
});
}

  return (
    <div>
      <Button onClick={getData} >getData</Button>
      {
        
      }

    </div>
  )
}

export default GetData
