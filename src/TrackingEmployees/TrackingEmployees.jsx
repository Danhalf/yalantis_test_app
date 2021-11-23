import style from './TrackingEmployees.module.css';
const title = 'Tracking Employees';

function TrackingEmployees() {
  return (
    <div className={style.tracking}>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
}
export default TrackingEmployees;
