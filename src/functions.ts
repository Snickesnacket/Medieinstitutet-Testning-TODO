import { Todo } from './types/Todo'
import { Result } from './types/Result'


export const addTodo = (title: string, todos: Todo[]): Result => {

	if (title === '') {
		return {
			success: false,
			error: 'Title cannot be empty',
			
		}
	}       

	if (title.length < 3) {
		return {
			success: false,
			error: 'Title must be at least 3 characters long',
		}
	}


	const todoIds = todos.map(todo => todo.id)   
	const id = Math.max(0, ...todoIds) + 1 


	const newTodo: Todo = {
		id,
		title,
		completed: false,
	}
	todos.push(newTodo)

	return {
		success: true,
	}
}


export const toggleTodo = (id: number, todos: Todo[]): Result => {

	const todo = todos.find(todo => todo.id === id)

	if (!todo) {
		return {
			success: false,
			error: 'Todo not found',
		}
	}

	let result = todo.completed = !todo.completed
	return {
		success: true,
	}
}

export const deleteTodo = (id: number, todos: Todo[]): Result => {

	const index = todos.findIndex(todo => todo.id === id)

	if (index === -1) {
		return {
			success: false,
			error: 'Todo not found',
		}
	}

	let result = todos.splice(index, 1)
	return {
		success: true,
	}
}
