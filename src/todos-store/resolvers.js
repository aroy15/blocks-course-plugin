import { populateTodos } from "./actions";
import { fetchTodos } from "./controls";

export function* getTodos() {
  const todos = yield fetchTodos();
  yield populateTodos(todos);
}
