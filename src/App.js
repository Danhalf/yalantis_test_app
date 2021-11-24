import style from './App.module.css';
import Employees from './Employees/Employees';
import TrackingEmployees from './TrackingEmployees/TrackingEmployees';
import { setEmployees, addActive, deleteActive } from "./store/employeesReducer";
import { connect } from "react-redux";

function App() {
    return (
        <div className={ style.app }>
            <EmployeesContainer/>
            <TrackingEmployeesContainer/>
        </div>
    );
}

const mapStateToProps = state => ({
    employees: state.employees,
    trackingEmployees: state.trackingEmployees
});


const EmployeesContainer = connect(mapStateToProps, {setEmployees, addActive, deleteActive})(Employees)
const TrackingEmployeesContainer = connect(mapStateToProps, {toggleActive: addActive})(TrackingEmployees)
export default App;
