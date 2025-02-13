export const getTodos = (state) => {
	return state.items;
};

export const getTodosNumber = (state) => {
	return state.items.length;
};

export const getTodosDone = (state) => {
	return state.items.filter((todo) => todo.completed).length;
};

export const getTodosUnDone = (state) => {
	return state.items.filter((todo) => !todo.completed).length;
};
