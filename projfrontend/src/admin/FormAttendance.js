import React,{useState,useEffect} from 'react';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { addAttendance } from './helper/adminapicall';


const FormAttendance = ()=>{
    const {user ,token} = isAuthenticated();
    const [values, setValues] = useState({
        //here "setValues" is a method
        name: "",
        rollNum: "",
        category: "",
        success: false,
      });

    const{
        name,
        rollNum,
        category,
        success
    }=values;


      

    const StudentFrom = () => {
        return (
          <div class="row">
            <div class="col-md-4 mx-auto">
              <div class="myform form ">
                <form action="" method="" name="">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control my-input"
                      id="name"
                    //   onChange={}
                      placeholder="Name"
                    //   value={name}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="RollNum"
                      class="form-control my-input"
                      id="RollNum"
                    //   onChange={}
                      placeholder="Roll Number"
                    //   value={name}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="Class"
                      class="form-control my-input"
                      id="Class"
                    //   onChange={}
                      placeholder="Class"
                    //   value={name}
                    />
                  </div>
                  <div class="text-center ">
                    <button
                      type="submit"
                    //   onClick={onSubmit}
                      class=" btn btn-block send-button tx-tfm"
                    >
                      Mark Attendance
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      };
    return (
        <Base title='Form' description='This is the Attendance Form'>
            {StudentFrom()}
        </Base>
    );
    
}

export default FormAttendance;