import './App.css'
import Test1 from './components/test1';
import Test2 from './components/test2';
import FormDemo from './components/formdemo';
import FormSubmission from './components/handson';
import Taskmanager from './components/taskmanager';

function App(){

  // state(optional)
    let username="vardhan";
  let person={
    pid:100,
    name:"bhanu",
  };
  let marks=[90,78,88];

  const test1=()=>{
    console.log("test1 called");
  }

  function App(){
    const messages=[
      {
        message1:"Good morning",
        message2:"Hello",
      },
      {
        message1:"Good Afternoon",
        message2:"Hi",
      },
      {
        message1:"Good Evening",
        message2:"Bye",
      }
    ]

    
  }

  // return a react element(mandatory)
  return(
    <div className='text-center text-2xl border-2 p-2'>
      <Taskmanager/>
    </div>
    
   
  );

}

export default App;


// jsx