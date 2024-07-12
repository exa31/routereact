import { createSlice } from '@reduxjs/toolkit';


// const { createAction, configureStore, createReducer, createSlice } = toolkit;


// const increment = createAction("INC");
// const decrement = createAction("DEC");

// const countReducer = createReducer(0, (builder) => {
//     builder
//         .addCase(increment, (state) => state + 1)
//         .addCase(decrement, (state) => state - 1)
// })

// const store = configureStore({
//     reducer: countReducer
// });

// membuat reducer dengan createSlice
const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => {
            if (state === 0) {
                return state
            }
            return state - 1
        }
    }
});




export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;

