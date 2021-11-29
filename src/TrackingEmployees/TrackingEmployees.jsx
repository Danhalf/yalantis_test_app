import style from './TrackingEmployees.module.css';

const title = 'Employees birthday';
const emptyList = 'Employees List is empty';
const emptyMonth = ''; // 'No selected employees in this month'
const date = new Date();
let months = [];
const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

for (let i = date.getMonth(); i < 12; i++) {
  months.push(monthsNames.splice([i], 1, ''));
}

const monthDiff = months.length;

months = [...months, ...monthsNames].flat().filter(Boolean);

function TrackingEmployees(props) {
  function getLocaleStorage(storage) {
    if (Array.isArray(storage)) {
      return storage
        .filter((emp) => emp.active === true)
        .reduce(
          (prev, current) => [
            ...prev,
            {
              id: current.id,
              firstName: current.firstName,
              lastName: current.lastName,
              dob: current.dob,
            },
          ],
          []
        );
    } else {
      let localStorageActive = [];
      for (let subdep of Object.values(storage)) {
        localStorageActive.push(getLocaleStorage(subdep));
      }
      return localStorageActive;
    }
  }

  const trackedEmployees = props.trackingEmployees
    ? [...getLocaleStorage(props.employees)]
        .filter((arr) => arr.length !== 0)
        .flat(1)
    : props.trackingEmployees;

  return (
    <div className={style.tracking}>
      <h2 className={style.title}>{title}</h2>
      {trackedEmployees.length > 0 ? (
        months.map((month, idx) => (
          <ul className={style.list} key={month}>
            <h2>{month}</h2>
            {trackedEmployees.filter(
              (emp) =>
                monthsNames[new Date(emp.dob).getMonth()] ===
                monthsNames[idx - monthDiff]
            ).length ? (
              trackedEmployees
                .filter(
                  (emp) =>
                    monthsNames[new Date(emp.dob).getMonth()] ===
                    monthsNames[idx - monthDiff]
                )
                .map((employee) => {
                  return (
                    <li key={employee.id}>
                      {new Date(employee.dob).getDate()}{' '}
                      {monthsNames[new Date(employee.dob).getMonth()]} -{' '}
                      {employee.firstName} {employee.lastName}{' '}
                    </li>
                  );
                })
            ) : (
              <li>{emptyMonth}</li>
            )}
          </ul>
        ))
      ) : (
        <h2>{emptyList}</h2>
      )}
    </div>
  );
}

export default TrackingEmployees;
