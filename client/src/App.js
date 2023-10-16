import logo from "./logo.svg";
import "./App.css";
import PatientTable from "./components/PatientTable";

function App() {
  return (
    <div className="App">
      <h1>XYZ Clinical Trail Application</h1>
      <p>a platform to recruit clinical trail patients</p>
      <PatientTable />
    </div>
  );
}

export default App;
