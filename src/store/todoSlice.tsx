import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TodoState {
    todoList: Array<string>;
}

const initialState: TodoState = {
    todoList: ['1234', '1234'],
};

// 리듀서와 엑션을 함께 정의합니다.
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // 리듀서는 state를 바꿔줌
        addTodo(state, action: PayloadAction<string>) {
            state.todoList.push(action.payload);
        },
    },
});

// action 을 반환합니다.
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
