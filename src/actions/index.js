export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const RESET = "RESET";
export const MEMORY = "MEMORY";
export const RESETMEMORY = "RESETMEMORY";
export const ADDMEMORY = "ADDMEMORY";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operation) => {
  return ({ type: CHANGE_OPERATION,payload: operation });
}
export const memory = () => {
  return ({ type: MEMORY});
}
export const resetMemory = () => {
  return ({ type: RESETMEMORY});
}
export const reset = () => {
  return ({ type: RESET});
}
export const addMemory = () => {
  return ({ type: ADDMEMORY});
}