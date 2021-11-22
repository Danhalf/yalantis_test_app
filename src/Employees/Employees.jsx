import { useEffect, useState } from "react";
import style from './Employess.module.css'
import Employee from "./Employee/Employee";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const URL = `https://yalantis-react-school-api.yalantis.com/api/task0/users`


function Employees() {
    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: { error.message }</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        let sortUsersByAlphabet = alphabet.reduce(function (acc, cur, i) {
            acc[cur] = [];
            return acc;
        }, {});

        users.forEach(user => {
            const currentLetter = user.firstName.slice(0, 1);
            if (sortUsersByAlphabet?.[currentLetter]) {
                sortUsersByAlphabet[currentLetter] = [ ...sortUsersByAlphabet[currentLetter], {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    dob: user.dob,
                    active: false
                } ]
            }
        })

        const changeHandler = (letter, user, value) => {
            sortUsersByAlphabet[letter][user].active = value
            console.log(sortUsersByAlphabet[letter][user].active)
        }

        return (
            <div className={style.letters}>

                { Object.keys(sortUsersByAlphabet).map(letter => (
                    <Employee
                        letter={letter}
                        key={letter}
                        users={sortUsersByAlphabet}
                        changeHandler={changeHandler}
                    />
                )) }
            </div>
        );
    }
}

export default Employees;