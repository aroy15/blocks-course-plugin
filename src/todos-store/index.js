import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import * as resolvers from './resolvers';
import controls from './controls';

const store = createReduxStore('blocks-course-plugin/todos', {
	reducer,
	actions,
	selectors,
	resolvers,
	controls,
});

register(store);
