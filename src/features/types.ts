// types.ts
export interface TodoState {
    // Define the shape of your todo state here
    todos: Todo[];
}

export interface Todo {
    // Define the shape of a single todo item
    id: number;
    title: string;
    completed: boolean;
}

// RootState is the overall state of your Redux store
export interface RootState {
    todo: TodoState;
}
