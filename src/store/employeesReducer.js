const SET_EMPLOYEES = 'SET_EMPLOYEES';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

const initialState = {
  employees: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case TOGGLE_ACTIVE:
      let currentStorage = localStorage.getItem('activeStatus') && [
        ...new Set(localStorage.getItem('activeStatus').split(',')),
      ];
      if (action.payload.active) {
        localStorage.setItem('activeStatus', [
          localStorage.getItem('activeStatus'),
          action.payload.id,
        ]);
      } else {
        currentStorage = currentStorage.filter(
          (elem) => elem !== action.payload.id
        );
        localStorage.setItem('activeStatus', currentStorage);
      }
      console.log(currentStorage);
      return {
        ...state,
        ...(state.employees[action.payload.letter][action.payload.idx][
          'active'
        ] = action.payload.active),
      };
    default:
      return state;
  }
};

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  payload: employees,
});
export const toggleActive = (active) => ({
  type: TOGGLE_ACTIVE,
  payload: active,
});

export default employeesReducer;
