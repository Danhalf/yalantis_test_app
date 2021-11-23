import style from '../Employess.module.css';

const Employee = (props) => (
  <li className={style.letter_item} key={props.user.id}>
    <span
      className={
        props.user.active
          ? `${style.item_name} ${style.active}`
          : style.item_name
      }
    >
      {props.user.firstName} {props.user.lastName}
    </span>
    <div className={style.item_radio}>
      <input
        label="active"
        type="radio"
        name={`${props.user.id}_active`}
        value={props.user.active}
        defaultChecked={props.user.active}
        onChange={() => props.toggleActive}
      />
      <input
        label="not active"
        type="radio"
        name={`${props.user.id}_active`}
        value={!props.user.active}
        defaultChecked={!props.user.active}
        onChange={() => props.toggleActive}
      />
    </div>
  </li>
);

export default Employee;
