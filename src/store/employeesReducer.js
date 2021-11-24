const SET_EMPLOYEES = 'SET_EMPLOYEES';
const ADD_ACTIVE = 'ADD_ACTIVE';
const DELETE_ACTIVE = 'DELETE_ACTIVE';

const initialState = {
    employees: [],
    trackingEmployees: [ { id: '222', lastName: 'Grygory' } ],
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
            };
        case ADD_ACTIVE:
            let currentStorage = localStorage.getItem('activeStatus') && [
                ...new Set(localStorage.getItem('activeStatus').split(',')),
            ];
            if (action.payload.active === true) {
                localStorage.setItem('activeStatus', [
                    localStorage.getItem('activeStatus'),
                    action.payload.id,
                ]);
            } else {
                currentStorage = currentStorage.filter(
                    (elem) => {
                        return elem !== action.payload.id
                    }
                );
                localStorage.setItem('activeStatus', currentStorage);
            }
            return {
                ...state,
                ...(state.employees[action.payload.letter][action.payload.idx][
                    'active'
                    ] = action.payload.active),
                trackingEmployees: [ ...state.trackingEmployees, {
                    id: action.payload.id, firstName: action.payload.firstName,
                    lastName: action.payload.lastName, dob: action.payload.dob
                } ],
            };
        case DELETE_ACTIVE:
        default:
            return state;
    }
};

export const setEmployees = (employees) => ({
    type: SET_EMPLOYEES,
    payload: employees,
});
export const toggleActive = (active) => ({
    type: ADD_ACTIVE,
    payload: active,
});

export default employeesReducer;
