import { describe, it, expect } from 'vitest'
import { addTodo,  toggleTodo, deleteTodo } from '../functions'
import { Todo } from '../types/Todo';


  

describe('addTodo', () => {
  it('should add a new todo to the list', () => {
    const todos: Todo[] = []
    const newTodoTitle = 'New todo'
    const result = addTodo(newTodoTitle, todos) 

     it('Should add a todo', () =>{
    expect(result.success).toBe(true)
    expect(todos).toHaveLength(1)
    expect(todos[0].id).toBe(true)
    expect(todos[0].title).toBe(newTodoTitle)
    expect(todos[0].completed).toBeDefined

     })
})

     it('Should not add a todo with empty title ', () => {
         expect(addTodo)
    })



    it('should not add a todo with title shorter than 3 characters', () =>{
         expect(addTodo)
    })

})

describe.todo('Toggle todo', () => {
    it('should toggle a todo', () => {
         expect(toggleTodo)
    })
    it('should not toggle a todo that does not exist', () => {
         expect(toggleTodo)
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

