import { CREATE_TODO, FETCH_TODOS } from './types';

export const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	};
};

export const createTodo = (title) => {
	return {
		type: CREATE_TODO,
		title,
	};
};

export default {
	FETCH_TODOS() {
		return window
			.fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Failed to fetch todos');
			});
	},
	CREATE_TODO({ title }) {
		return window
			.fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST',
				body: JSON.stringify({
					title: title || 'New Todo',
					completed: false,
					userId: 1,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Could not create todo.');
			});
	},
};
