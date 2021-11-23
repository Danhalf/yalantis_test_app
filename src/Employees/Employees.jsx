import { useEffect, useState } from 'react';
import style from './Employess.module.css';
import Employee from './Employee/Employee';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const URL = `https://yalantis-react-school-api.yalantis.com/api/task0/users`;

function Employees() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
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
          setUsers(sortUsersByAlphabet);
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
    const changeHandler = (letter, user, value) => {
      setUsers(users, (users[letter][user].active = value));
    };

    return (
      <div className={style.letters}>
        {Object.keys(users).map((letter) => (
          <ul className={style.letter_list} key={letter}>
            <h3 className={style.letter_title}>{letter}</h3>
            {users[letter].length ? (
              users[letter].map((user, idx) => (
                <Employee
                  user={user}
                  changeHandler={changeHandler}
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
