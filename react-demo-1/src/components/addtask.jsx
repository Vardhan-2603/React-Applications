import { useForm } from "react-hook-form";

function AddTask({addNewTasks}) {

    let {handleSubmit,register}=useForm();

    const onFormSubmit=(taskObj)=>{
        // console.log(taskObj);
        addNewTasks(taskObj);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
            <input className="border mb-3" type="text" {...register("taskName")} placeholder="add new task" />
            </div>
            <button className="border" type="submit">add task</button>
        </form>
    </div>
  )
}

export default AddTask