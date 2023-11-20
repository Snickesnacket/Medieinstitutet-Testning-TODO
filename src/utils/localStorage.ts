import DOMException from 'domexception'
import { Todo } from '../types/Todo'

export const getTodos = (): Todo[] => {
	const json = localStorage.getItem('todos') ?? '[]'

	const todos: Todo[] = JSON.parse(json)

	return todos
}

export const saveTodos = (todos: Todo[]) => {
	try {

		const json = JSON.stringify(todos)

		localStorage.setItem('todos', json)

		return {
			success: true,
		}

	} catch (error) {
	
		if (error instanceof DOMException) {
			return {
				success: false,
				error: error.message,
			}
		}

		return {
			success: false,
			error: 'Unknown error',
		}
	}
}
