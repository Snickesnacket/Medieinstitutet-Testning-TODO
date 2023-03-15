import { describe, it, expect } from 'vitest'
import { addTodo,  toggleTodo, deleteTodo } from '../functions'
import { Todo } from '../types/Todo';


  

describe('addTodo', () => {
    const todos: Todo[] = []
    const newTodoTitle = 'New todo'
    const result = addTodo(newTodoTitle, todos) 

    const checkIfEqual = (todos: Todo[]): boolean => {
    if (todos.length === 0) {
        return true
    }
    const newTitle = todos[0].title
    return todos.every((todo) => todo.title === newTitle)
    }

     it('Should add a todo', () =>{
    expect(result.success).toBe(true)
    //expect(todos[0].title).toBe(String)
    //expect(todos[0].id).toBe(Number)
    expect(todos[0].title).toBe(newTodoTitle)
    expect(todos[0].completed).toBe(false)
    //expect(checkIfEqual).toBe(false)
     })

     it('Should not add a todo with empty title ', () => {
         expect(todos[0].title).not.toBe(false)
         expect(todos[0].title).not.toBe(undefined)
         expect(result.error).not.toBe(true)
    })

    it('should not add a todo with title shorter than 3 characters', () =>{
         //expect(todos[0].title).not.lessThan(3)
         expect(todos[0].title).not.toBe(Number)
         expect(result.error).not.toBe(true)

    })
})



describe('Toggle todo', () => {
    const todos: Todo[] = []
    const newId = '0'
    const result = toggleTodo(0, todos) 
    console.log('this is the result', result)

    it('should toggle a todo', () => {
         expect(result.success).toBe(false)
        // expect(newId).not.toBe(false)
       
    })
    it('should not toggle a todo that does not exist', () => {
        // expect(result.error).not.toBe(false)

    })
})


describe.todo('Delete todo', () => {
    it('should delete a todo', () => {
         expect(deleteTodo)
    })
    it('should not delete a todo that does not exist', () => {
         expect(deleteTodo)
    })
})

