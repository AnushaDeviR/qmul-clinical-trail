import "./App.css";
import PatientTable from "./components/PatientTable";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl">XYZ Clinical Trail Application</h1>
      <p className="text-sm mb-7">a platform to recruit clinical trail patients</p>
      <PatientTable />
    </div>
  );
}

export default App;
