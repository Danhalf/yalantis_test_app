import style from './TrackingEmployees.module.css';

const title = 'Employees birthday';
const date = new Date();
let months = [];
const monthsNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

for (let i = date.getMonth(); i < 12; i++) {
    months.push(monthsNames.splice([ i ], 1, ''))
}

const monthDiff = months.length

months = [ ...months, ...monthsNames ].flat().filter(Boolean)


function TrackingEmployees(props) {
    return (
        <div className={ style.tracking }>

            <h2 className={ style.title }>{ title }</h2>
            {
                props.trackingEmployees.length
                    ? months.map((month, idx) => (
                            <ul className={ style.list } key={ month }>
                                <h2>{ month }</h2>
                                {
                                    props.trackingEmployees.filter(emp => monthsNames[new Date(emp.dob).getMonth()] === monthsNames[idx - monthDiff]).length ?
                                        props.trackingEmployees.filter(emp => monthsNames[new Date(emp.dob).getMonth()] === monthsNames[idx - monthDiff]).map(employee => {
                                            return (
                                                <li key={ employee.id }>{ new Date(employee.dob).getDate() } { monthsNames[new Date(employee.dob).getMonth()] } - { employee.firstName } { employee.lastName } </li>
                                            )
                                        })
                                        : <li>Employees List is empty</li> }
                            </ul>
                        )
                    )
                    : <h2>Employees List is empty</h2>
            }
        </div>
    );
}

export default TrackingEmployees;
