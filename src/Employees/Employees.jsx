import { useEffect, useState } from 'react';
import style from './Employess.module.css';
import Employee from './Employee/Employee';
import API from "../API/API";
import {  setEmployees, toggleActive } from "../store/employeesReducer";
import { useDispatch } from "react-redux";


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const fetchAPI = API;

function Employees(props) {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [users, setUsers] = useState({});
    const dispatch = useDispatch()
  useEffect(() => {
    fetchAPI
      .then(
        (result) => {
          setIsLoaded(true);
          let sortUsersByAlphabet = alphabet.reduce(function (acc, cur) {
            acc[cur] = [];
            return acc;
          }, {});
          result.forEach((user) => {
            const currentLetter = user.firstName.slice(0, 1);
            if (sortUsersByAlphabet?.[currentLetter]) {
              sortUsersByAlphabet[currentLetter].push({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                dob: user.dob,
                active: false,
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
                props.employees[letter].map((user, idx) => (
                <Employee
                  user={user}
                  toggleActive={dispatch(toggleActive(user))}
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
