const SET_EMPLOYEES = 'SET_EMPLOYEES';
const ADD_ACTIVE = 'ADD_ACTIVE';
const DELETE_ACTIVE = 'DELETE_ACTIVE';

const initialState = {
  employees: [],
  trackingEmployees: [],
  currentStorage: localStorage.getItem('activeStatus') && [
    ...new Set(localStorage.getItem('activeStatus').split(',')),
  ],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };

    case ADD_ACTIVE:
      localStorage.setItem('activeStatus', [
        localStorage.getItem('activeStatus'),
        action.payload.id,
      ]);
      return {
        ...state,
        ...(state.employees[action.payload.letter][action.payload.idx][
          'active'
        ] = action.payload.active),
        trackingEmployees: [
          ...state.trackingEmployees,
          {
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            dob: action.payload.dob,
          },
        ].sort((a, b) => a.lastName.localeCompare(b.lastName)),
      };

    case DELETE_ACTIVE:
      if (state.currentStorage)
        state.currentStorage = state.currentStorage.filter((elem) => {
          return elem !== action.payload.id;
        });
      localStorage.setItem('activeStatus', state.currentStorage);
      return {
        ...state,
        ...(state.employees[action.payload.letter][action.payload.idx][
          'active'
        ] = action.payload.active),
        trackingEmployees: state.trackingEmployees.filter(
          (emp) => emp.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  payload: employees,
});
export const addActive = (active) => ({
  type: ADD_ACTIVE,
  payload: active,
});
export const deleteActive = (active) => ({
  type: DELETE_ACTIVE,
  payload: active,
});

export default employeesReducer;
