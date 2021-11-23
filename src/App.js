import style from './App.module.css';
import Employees from './Employees/Employees';
import TrackingEmployees from './TrackingEmployees/TrackingEmployees';

function App() {
  return (
    <div className={style.app}>
      <Employees />
      <TrackingEmployees />
    </div>
  );
}

export default App;
