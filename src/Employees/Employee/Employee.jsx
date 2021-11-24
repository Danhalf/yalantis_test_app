import style from '../Employess.module.css';
import { useState } from 'react';

const Employee = (props) => {
    const [ active, setActive ] = useState(props.user.active);
    return (
        <li className={ style.letter_item } key={ props.user.id }>
      <span
          className={
              active ? `${ style.item_name } ${ style.active }` : style.item_name
          }
      >
        { props.user.firstName } { props.user.lastName }
      </span>
            <div className={ style.item_radio }>
                <input
                    label="active"
                    type="radio"
                    name={ `${ props.user.id }_active` }
                    // value={props.user.active}
                    defaultChecked={ props.user.active }
                    onChange={ () => {
                        setActive(true);
                        return props.toggleActive({
                            letter: props.letter,
                            idx: props.idx,
                            id: props.user.id,
                            firstName: props.user.firstName,
                            lastName: props.user.lastName,
                            dob: props.user.dob,
                            active: true,
                        });
                    } }
                />
                <input
                    label="not active"
                    type="radio"
                    name={ `${ props.user.id }_active` }
                    // value={props.user.active}
                    defaultChecked={ !props.user.active }
                    onChange={ () => {
                        setActive(false);
                        return props.toggleActive({
                            letter: props.letter,
                            idx: props.idx,
                            id: props.user.id,
                            active: false,
                        });
                    } }
                />
            </div>
        </li>
    );
};

export default Employee;
