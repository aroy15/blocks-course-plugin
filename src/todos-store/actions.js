import { dispatch } from '@wordpress/data';
import { createTodo, toggleTodo as toggleTodoControl } from './controls';
import { ADD_TODO, POPULATE_TODOS, UPDATE_TODO } from './types';

export function* addTodo(title) {
	try {
		const todo = yield createTodo(title);
		return {
			type: ADD_TODO,
			todo,
		};
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not add todo.'
		);
	}
}

export function* toggleTodo(todo, index) {
	try {
		yield updateTodo({ ...todo, loading: true }, index);
		const updatedTodo = yield toggleTodoControl(todo);
		return updateTodo(updatedTodo, index);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not update todo.'
		);
	}
}

export function updateTodo(todo, index) {
	return {
		type: UPDATE_TODO,
		index,
		todo,
	};
}

export const populateTodos = (todos) => {
	return {
		type: POPULATE_TODOS,
		todos,
	};
};
