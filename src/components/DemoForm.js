import React, { useState, useEffect } from "react";


const DemoForm = (props) => {

    const initialFieldValues = {
        fullname: '',
        mobile: '',
        email: ''
    }



    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if(props.currentId === '')
        setValues({
            // eslint-disable-next-line
            ...initialFieldValues
            
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })
     }, [props.currentId, props.contactObjects])


  const handleInputChange = e => {
      var { name, value } = e.target
      setValues({
          ...values,
          [name]: value
      })
  }

   const handleFormSubmit = e => {
       e.preventDefault();
       props.addOrEdit(values)
   }

return(
<>
<form autoComplete="off" onSubmit={handleFormSubmit}>
<div className="form-group input-group">
  <div className="input-group-prepend">
  <div className="input-group-text">
  <i className="fas fa-user"></i>
   </div>
   </div>
   <input className="form-control" placeholder="Enter full name" name="fullname" value={values.fullname} onChange={handleInputChange} />
   </div>
<br/>
<div className="form-row">
    <div className="form-group input-group col-md-6">
        
        <div className="input-group-prepend">
            <div className="input-group-text">
                 <i className="fas fa-mobile-alt"></i>
            </div>
        </div>
           <input className="form-control" placeholder="Enter Mobile number" name="mobile" value={values.mobile} onChange={handleInputChange} />
    </div>
<br/>

        <div className="form-group input-group col-md-6">
            
            <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </div>
            </div>
           <input className="form-control" placeholder="Enter Email address" name="email" value={values.email} onChange={handleInputChange} />
         </div>

      <br/>

      <div className="form-group">
          <input type="submit" value={props.currentId === '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
      </div>
</div>
</form>
</>
);

}
export default DemoForm;