import { Todo } from './types/Todo'
import { addTodo, deleteTodo, toggleTodo } from './functions'
import { showError, hideError } from './utils/error'
import { getTodos, saveTodos } from './utils/localStorage'
import { renderTodos } from './utils/render'
import './assets/scss/main.scss'

let todos: Todo[] = getTodos()

const todosEl = document.querySelector<HTMLUListElement>('#todos')!
const newTodoFormEl = document.querySelector<HTMLFormElement>('#new-todo-form')!

todosEl.addEventListener('click', (e: MouseEvent) => {
	const target = e.target as HTMLElement

	if (target.classList.contains('todo')) {
		const todoId = Number(target.dataset.todoId)
		const result = toggleTodo(todoId, todos)

		if (!result.success) {
			showError(result.error!)
			return
		}

		hideError()

		saveTodos(todos)

		renderTodos(todos)

	} else if (target.classList.contains('delete-todo')) {
		e.stopPropagation()

		const todoId = Number(target.parentElement!.dataset.todoId)
		const result = deleteTodo(todoId, todos)

		if (!result.success) {
			showError(result.error!)
			return
		}

		hideError()

		saveTodos(todos)

		renderTodos(todos)
	}
});


newTodoFormEl.addEventListener('submit', (e: SubmitEvent) => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value

	const result = addTodo(newTodoTitle, todos)

	if (!result.success) {
		showError(result.error!)
		return
	}

	hideError()
	saveTodos(todos)

	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	renderTodos(todos)
})

newTodoFormEl.addEventListener('reset', () => {
	hideError()
})

renderTodos(todos)
