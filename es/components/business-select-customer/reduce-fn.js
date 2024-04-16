export var deptUserInitialState = {
  open: false,
  defaultCheckedItems: []
};
export var deptUserReducer = function deptUserReducer(state, action) {
  switch (action.type) {
    case 'SETOPENSTATUS':
      return {
        open: action.payload,
        defaultCheckedItems: state.defaultCheckedItems
      };
    case 'SETSELECTITEMS':
      return {
        open: false,
        defaultCheckedItems: action.payload
      };
    case 'RESET':
    default:
      return deptUserInitialState;
  }
};
export var tagesInitialState = {
  open: false,
  defaultCheckedItems: []
};
export var tagsReducer = function tagsReducer(state, action) {
  switch (action.type) {
    case 'SETOPENSTATUS':
      return {
        open: action.payload,
        defaultCheckedItems: state.defaultCheckedItems
      };
    case 'SETSELECTITEMS':
      return {
        open: false,
        defaultCheckedItems: action.payload
      };
    case 'RESET':
    default:
      return tagesInitialState;
  }
};
export var communityInitialState = {
  open: false,
  defaultCheckedItems: []
};
export var communityReducer = function communityReducer(state, action) {
  switch (action.type) {
    case 'SETOPENSTATUS':
      return {
        open: action.payload,
        defaultCheckedItems: state.defaultCheckedItems
      };
    case 'SETSELECTITEMS':
      return {
        open: false,
        defaultCheckedItems: action.payload
      };
    case 'RESET':
    default:
      return communityInitialState;
  }
};
export var householdInitialState = {
  open: false,
  defaultCheckedItems: []
};
export var householdReducer = function householdReducer(state, action) {
  switch (action.type) {
    case 'SETOPENSTATUS':
      return {
        open: action.payload,
        defaultCheckedItems: state.defaultCheckedItems
      };
    case 'SETSELECTITEMS':
      return {
        open: false,
        defaultCheckedItems: action.payload
      };
    case 'RESET':
    default:
      return householdInitialState;
  }
};