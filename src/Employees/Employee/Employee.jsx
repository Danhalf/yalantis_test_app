import style from "../Employess.module.css";

const Employee = (props) => (
    <ul className={style.letter_list} key={ props.letter }>
        <h3 className={style.letter_title}>{ props.letter }</h3>
        { props.users[props.letter].length ? props.users[props.letter].map((user, idx) =>
            <li
                className={ style.letter_item }
                key={ user.id }
            >
                <span className={style.item_name}>{ user.firstName } { user.lastName }</span>
                <div className={style.item_radio}>
                    <input label="active" type="radio" name="active" value="active"  onChange={ () => props.changeHandler(props.letter, idx, true) } />
                    <input label="not active" type="radio"  name="active" value="not active"  onChange={ () => props.changeHandler(props.letter, idx, false) } />
                </div>
            </li>
        ) : <li className={`${style.letter_item} ${style.letter_empty}`}>No Employees</li> }
    </ul>
)

export default Employee;