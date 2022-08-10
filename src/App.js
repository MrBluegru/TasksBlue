import logo from "./logo.svg";
// import Greeting from "./components/pure/greeting.jsx";
// import GreetingF from "./components/pure/greetingF";
import "./App.css";
import TaskList from "./components/container/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Mr. Blue"></Greeting> */}
        {/* <GreetingF name="Mr. Blue"/> */}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
