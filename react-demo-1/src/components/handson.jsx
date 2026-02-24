import { useForm} from "react-hook-form";
import { useState } from "react";

function FormSubmission(){
        let {register,handleSubmit,setError,formState:{errors}}=useForm();

        let [users,setUser]=useState([]);
        


        const submitForm=(obj)=>{

            // the date is not after 2020
            setError("date",{
                type:"manual",
                message:"the date is not after 2020"
            })
            // {errors.date?.type===manual && <p>The date is not suitable<p/>}
            setUser([...users,obj])
        }

        console.log(users);


    return(
        <div className="bg-blue-400">
            <h1>User registration Form</h1>
            <form className="bg-pink-500 ms-60 me-60" onSubmit={handleSubmit(submitForm)}>
            <div>
            <input className="border-2 mb-2 mt-2" type="text" {...register("firstname",{required:true,minLength:3,maxLength:6})} placeholder="Enter First Name" />
            {errors.firstname?.type==='required' && <p className="text-red-600">first name is required</p>}
            {errors.firstname?.type==='minLength' && <p className="text-red-600">minLength is 3</p>}
            {errors.firstname?.type==='maxLength' && <p className="text-red-600">maxLength is 6</p>}
            </div>
            <div>
            <input  className="border-2 mb-2" type="text" {...register("lastname",{required:true,minLength:3,maxLength:6})}  placeholder="Enter Last Name" />
            {errors.lastname?.type==='required' && <p className="text-red-600">last name is required</p>}
            {errors.lastname?.type==='minLength' && <p className="text-red-600">minLength is 3</p>}
            {errors.lastname?.type==='maxLength' && <p className="text-red-600">maxLength is 6</p>}
            </div>
            <div>
            <input className="border-2 mb-2" type="text" {...register("email",{required:true})} placeholder="Enter Email"/>
            {errors.email?.type==='required' && <p className="text-red-600">email  is required</p>}
            </div>
            <div>
            <input className="border-2 mb-2" type="date" {...register("date",{required:true})} placeholder="Enter Date of birth"/>
            {errors.date?.type==='required' && <p className="text-red-600">date  is required</p>}
            </div>
            <button type="submit" className="border-2 bg-blue-300 m-2">register user</button>
            </form>

          <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Date of birth</th>
                </tr>
            </thead>
            <tbody>
                {users.map((userObj, key)=><tr key={key}>
                    <td>{userObj.firstname}</td>
                    <td>{userObj.lastname}</td>
                    <td>{userObj.email}</td>
                    <td>{userObj.date}</td>
                </tr>)}
            </tbody>
        </table>  

        </div>
    )
}
export default FormSubmission;