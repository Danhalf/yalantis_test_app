import style from './App.module.css';
import Employees from './Employees/Employees';
import TrackingEmployees from './TrackingEmployees/TrackingEmployees';
import { setEmployees, toggleActive } from "./store/employeesReducer";
import { connect } from "react-redux";

function App() {
    return (
        <div className={ style.app }>
            <EmployeesContainer/>
            <TrackingEmployees/>
        </div>
    );
}

const mapStateToProps = state => ({
    employees: state.employees,
});


const EmployeesContainer = connect(mapStateToProps, {setEmployees, toggleActive})(Employees)

export default App;
