import { useEffect, useState } from 'react';
import style from './Employess.module.css';
import Employee from './Employee/Employee';
import API from '../API/API';
import { setEmployees } from '../store/employeesReducer';
import { useDispatch } from 'react-redux';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const fetchAPI = API;

function Employees(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAPI.then(
      (result) => {
        setIsLoaded(true);
        let sortUsersByAlphabet = alphabet.reduce(function (acc, cur) {
          acc[cur] = [];
          return acc;
        }, {});
        result.forEach((user, i) => {
          const currentLetter = user.firstName.slice(0, 1);
          if (sortUsersByAlphabet?.[currentLetter]) {
            sortUsersByAlphabet[currentLetter].push({
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              dob: user.dob,
              active: localStorage.getItem('activeStatus')
                ? localStorage.getItem('activeStatus').includes(user.id)
                : false,
            });
          }
        });

        dispatch(setEmployees(sortUsersByAlphabet));
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={style.letters}>
        {Object.keys(props.employees).map((letter) => (
          <ul className={style.letter_list} key={letter}>
            <h3 className={style.letter_title}>{letter}</h3>
            {props.employees[letter].length ? (
              props.employees[letter]
                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                .map((user, idx) => (
                  <Employee
                    user={user}
                    key={`${idx}${letter}`}
                    addActive={props.addActive}
                    deleteActive={props.deleteActive}
                    idx={idx}
                    letter={letter}
                  />
                ))
            ) : (
              <li className={`${style.letter_item} ${style.letter_empty}`}>
                No Employees
              </li>
            )}
          </ul>
        ))}
      </div>
    );
  }
}

export default Employees;
