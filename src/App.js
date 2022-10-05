import logo from "./logo.svg";
// import Greeting from "./components/pure/greeting.jsx";
// import GreetingF from "./components/pure/greetingF";
import TaskList from "./components/container/task_list";
import "./App.css";
import GreetingStyled from "./components/pure/greetingStyled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Mr. Blue"></Greeting> */}
        {/* <GreetingF name="Mr. Blue"/> */}
        {/* <TaskList></TaskList> */}
        <GreetingStyled name="Mr. Blue"/>
      </header>
    </div>
  );
}

export default App;
