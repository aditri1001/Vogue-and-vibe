import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

// Define the shape of a Todo item
interface Todo {
    fullName: '',
    email: '',
    number: '',
    dob: '',
    gender: '',
    height: '',
    portfolioLink: '',
    address: '',
    instagramHandle: '',
    profession: '',
    about: '',
    leftSideShot: null,
    rightSideShot: null,
    headShot: null,
    fullLength: null,
    privacyNotice: false,
    ageConsent: false,
}

// Define the initial state shape
interface TodoState {
    todos: Todo[];
}

// Initialize the state
const initialState: TodoState = {
    todos: []
};

// Create the slice
const Slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
            const todo = {
                id: nanoid(),
                ...action.payload
            }
            state.todos.push(todo);
        }
    }
})

// Export actions and reducer
export const { addTodo } = Slice.actions;
export default Slice.reducer;
