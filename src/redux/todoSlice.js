import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    input: "",
};

export const taskSlice = createSlice ( {
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state) => {
            if (state.input.trim()) { 
                const maxId = state.tasks.length > 0
                    ? Math.max(...state.tasks.map((task) => task.id))
                    : 0;

                const newTask = {
                  id: maxId + 1,
                  title: state.input,
                };
                state.tasks = [...state.tasks, newTask]; ; 
                state.input = "";
              }
            },
            deleteTask: (state, action) => {
              state.tasks = state.tasks.filter(task => task.id !== action.payload); 
            },
            updateInput: (state, action) => {
                state.input = action.payload; 
              },
        }
})

export const {addTask, deleteTask, updateInput} = taskSlice.actions
export default taskSlice.reducer