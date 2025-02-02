import { dispatch } from '@wordpress/data';
import { populateTodos } from './actions';
import { fetchTodos } from './controls';

export function* getTodos() {
	try {
		const todos = yield fetchTodos();
		return populateTodos(todos);
	} catch (error) {
		return dispatch('core/notices').createErrorNotice(
			error.message || 'Could not fetch todos.'
		);
	}
}
