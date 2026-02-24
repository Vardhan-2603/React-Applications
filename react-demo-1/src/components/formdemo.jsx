import { useForm } from "react-hook-form";

function FormDemo(){

    const {register,handleSubmit,formState:{errors}}=useForm();


    const submitForm=(obj)=>{
        console.log(obj);
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <input className="border-2 m-2" type="text" {...register("username",{required:true,minLength:3})} placeholder="username"/>
                    {
                        errors.username?.type==='required' && <p className="text-red-600">username required</p>
                    }
                    {
                        errors.username?.type==='minLength' && <p className="text-red-600">Minlength 3</p>
                    }
                </div>
                <div>
                    <input className="border-2 m-2" type="text" {...register("email",{required:true})}  placeholder="email"/>
                    {
                        errors.email?.type==='required' && <p className="text-red-500">Email required</p>
                    }
                </div>
                <button type="submit" className="border-2 bg-blue-300 ">
                    Login
                </button>
            </form>
        </div>
    )
}
export default  FormDemo;


// Validations rules
    // required
    // minLength&maxLength
    // min & max
    // pattern

// condition?react ele1:react ele2
//  condition && react ele1