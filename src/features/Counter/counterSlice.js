const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0, //có thể dùng số, chuỗi, array, object
    reducers: {
        increase(state) {
            return state + 1;
        },
        descrease(state) {
            return state - 1;
        },
    }
});

const { actions, reducer } = counterSlice;
export const { increase, descrease } = actions;
export default reducer;
