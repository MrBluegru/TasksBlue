import logo from "./logo.svg";
// import Greeting from "./components/pure/greeting.jsx";
// import GreetingF from "./components/pure/greetingF";
import TaskList from "./components/container/task_list";
import "./App.css";
import GreetingStyled from "./components/pure/greetingStyled";
import LoginFormik from "./components/pure/forms/loginFormik";

function App() {
  return (
    <div className="App">
        {/* <Greeting name="Mr. Blue"></Greeting> */}
        {/* <GreetingF name="Mr. Blue"/> */}
        {/* <GreetingStyled name="Mr. Blue"/> */}
        {/* <TaskList></TaskList> */}
        <LoginFormik/>
    </div>
  );
}

export default App;
