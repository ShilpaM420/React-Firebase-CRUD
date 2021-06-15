import React, { useState, useEffect } from "react";
import DemoForm from "./DemoForm";
import firebaseDb from "../firebaseconfig";
const Demo = () => {

  var [contactObjects,setContactObjects] = useState({})
var [currentId, setCurrentId] = useState('')

  useEffect(()=>{
        firebaseDb.child('contacts').on("value",snapshot=>{
          if(snapshot.val()!=null)
          setContactObjects({
            ...snapshot.val()
          })
          else
          setContactObjects({ })
        })
  },[]) 


    const addOrEdit = obj => {
      if (currentId === '')
       firebaseDb.child('contacts').push(
            obj,
             err => {
             if(err)
           console.log(err)
           else
           setCurrentId('')
           
    }
)
else
firebaseDb.child(`contacts/${currentId}`).set(
  obj,
   err => {
   if(err)
 console.log(err)
 else
 setCurrentId('')
}
)
    }

const onDelete = key => {
  if(window.confirm('Are you sure to delete ?')){
    firebaseDb.child(`contacts/${key}`).remove(
       err => {
       if(err)
     console.log(err)
     else
     setCurrentId('')
    }
    )  
  }
}

return(
    <>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">User Details</h1>   <br/> 
  </div>
</div>

<div className="row">
    <div className="col-md-5">
      <DemoForm {...({ addOrEdit, currentId, contactObjects })} />
    </div>
    <div className="col-md-7">
   
    <table className="table table-borderless table-stripped">
      <thead className="thead-light">
      <tr>
        <th>Full name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {
            Object.keys(contactObjects).map(id => {
              return <tr>
                <td>{contactObjects[id].fullname}</td>
                <td>{contactObjects[id].mobile}</td>
                <td>{contactObjects[id].email}</td>
                <td>
                  <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                    <i className="fas fa-pencil-alt"></i>
                  </a>
                  <a className="btn text-primary" onClick={() => { onDelete(id) }}>
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
            })
        }
      </tbody>
    </table>
    </div>
</div>
</>
);

}
export default Demo;