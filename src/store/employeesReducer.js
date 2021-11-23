const SET_EMPLOYEES = 'SET_EMPLOYEES'
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'

const initialState = {
    employees: [],
}


const employeesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
            }
        case TOGGLE_ACTIVE:
            // console.log(action, state.employees['A'][0].active)
            return {
                ...state,
                // employees: state.employees.map(employee => employee.id === action.idx ? {
                //     ...employee,
                //     active: !employee.active
                // } : employee)
            }
        default :
            return state
    }

}

export const setEmployees = employees => ({type: SET_EMPLOYEES, payload: employees})
export const toggleActive = active => ({type: TOGGLE_ACTIVE, payload: active})


export default employeesReducer