import style from './TrackingEmployees.module.css';

const title = 'Tracking Employees';

function TrackingEmployees(props) {
    console.log(props);
    return (
        <div className={ style.tracking }>
            <h2 className={ style.title }>{ title }</h2>
            <ul className={ style.list }>
                {
                    // props?.trackingEmployees.length !== undefined ?
                        props.trackingEmployees.map(employee => (
                        <li key={ employee.id }> { employee.firstName } { employee.lastName } </li>
                    )
                )
                    // : <li> No Employees</li>
                }
            </ul>
        </div>
    );
}

export default TrackingEmployees;
