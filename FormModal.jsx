import React from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import ModalHospital from "./ModalHospital"
import ModalDoctor from "./ModalDoctor"


const  FormModal = ()=>{
  
    const [data, setData] = useState([]);
    const [dataDoc, setDataDoc] = useState([]);
const [formData, setFormData ] = useState({
    first:"",
    last:""
})
const [formDoctor, setFormDoctor ] = useState({
    name:"",
    hospName:"",
    spec:"",
    salary:"",

})



useEffect(()=>{
getHospData()
}, [])

const getHospData=()=>{
return axios.get(`http://localhost:9090/hospitals`).then((res)=> 
setData(res.data)
).catch((err)=>console.log(err))  
}


useEffect(()=>{
  getDocData()
  }, [])
  
  const getDocData=()=>{
  return axios.get(`http://localhost:9090/doctors`).then((res)=> 
  setDataDoc(res.data)
  ).catch((err)=>console.log(err))  
  }
  


const handleChnage =(e)=>{
    const {name, value}=e.target
setFormData({
    ...formData, 
    [name]:value
})
}

const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("response");
axios.post('http://localhost:9090/hospitals', formData)
  .then(function (response) {
    console.log(response);
    getHospData();
    alert("From Submitted")
    setFormDoctor({...formDoctor, name:"", hospName:"", spec:"",salary:"",})
   })
  .catch(function (error) {
    console.log(error);
  });
}


const handleChnageDoc =(e)=>{
  const {name, value}=e.target
  
  setFormDoctor({
      ...formDoctor, 
      [name]:value
  })
    
}

const handleSubmitDoc=(e)=>{
     e.preventDefault();
     axios.post('http://localhost:9090/doctors', formDoctor)
     .then(function (response) {
             getDocData();
       alert("From Submitted")
   setFormDoctor({...formDoctor, name:"", spec:"", salary:"", hospName:""})
      })
     .catch(function (error) {
       console.log(error);
     });

}



  return (
    <>
      <ModalHospital handleChnage={handleChnage} handleSubmit={handleSubmit}  formData={formData} ></ModalHospital>
      <ModalDoctor data={data} handleChnageDoc={handleChnageDoc} handleSubmitDoc={handleSubmitDoc}  formDoctor={formDoctor}></ModalDoctor>
      <table>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Hopital Name</th>
            <th>Specailisaion</th>
            <th>Salary</th>
            <th>Details</th>
          </tr>
          {  dataDoc.map((elem, i) => (
            <div key={elem.id}>
              <tr>
                <td>{i + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.hospName}</td>
                <td>{elem.spec}</td>
                <td>{elem.salary}</td>
                
              </tr>
            </div>
          ))}
        </table>
    
    </>
  )
  }
export default FormModal
