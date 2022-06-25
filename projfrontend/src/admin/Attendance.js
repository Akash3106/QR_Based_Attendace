import React , {useState , useEffect} from "react";
import Base from "../core/Base";
import QRCode from "react-qr-code";
import {
  getCategories,
  createaProduct,
  createProduct,
} from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

const Attendance = () => {
  
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = () => {
    getCategories().then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const [visi ,setVisi] = useState({
    visible : false
  });

  const onSubmit = () =>{
    setVisi({...visi, visible : true})
  };

  return (
    <Base title="Generate Qrcode Page " description="Qr code will be Generated Here">
      <div class="row">
            <div class="col-md-4 mx-auto">
              <div class="myform form ">
                <form action="" method="post" name="login">
                <select
                  onChange={handleChange("category")}
                  className="form-control"
                  placeholder="Category">
                  <option>Select Class </option>
                    {categories &&
                      categories.map((cate, index) => (
                        <option key={index} value={cate._id}>
                          {cate.name}
                        </option>
                      ))}
                </select>
                </form>
              </div>
              <br/>
              <div class="text-center ">
                <button
                  type="submit"
                  onClick={onSubmit}
                  class=" btn btn-block send-button tx-tfm">
                    Generate
                </button>
              </div>
              <br/>
              <div class="text-center "> 
                {visi.visible ?<QRCode value="http://localhost:3000/admin/Qrcode/create" /> : null}
              </div>         
            </div>
      </div> 
    </Base>
  );
};

export default Attendance;
