import { describe, it, expect, beforeEach } from 'vitest'
import { addTodo,  toggleTodo, deleteTodo } from '../functions'
import { Todo } from '../types/Todo';


  

describe('addTodo', () => {
    let todos: Todo[] = []
      beforeEach(() => {
    todos = [];
   });

     it('Should add a todo', () =>{
        const newTodoTitle = 'New todo'
        const result = addTodo(newTodoTitle, todos);
     
        expect(result.success).toBe(true)
        expect(todos[0].title).toBe(newTodoTitle)
        expect(todos[0].id).toEqual(todos.length)
    })

    it('Should not add a todo with empty title ', () => {
        const result = addTodo('', todos);
        expect(todos.length).toBe(0)
        expect(result.error).toBe('Title cannot be empty')
        expect(result.success).toBe(false)
     
    })

    it('should not add a todo with title shorter than 3 characters', () =>{
        const result = addTodo('0', todos);
         expect(result.error).toBe('Title must be at least 3 characters long')
         expect(result.success).toBe(false)
         expect(todos.length).toEqual(0)
    })
})


 
describe('Toggle todo', () => {
    const todos: Todo[] = [
        {
        id: 0,
        title: "",
        completed: false
        }
    ]

    it('should toggle a todo', () => {
        const id =0
        todos[0].completed = true
        const result = toggleTodo(id, todos)
        expect(result.success).toBe(true)
        expect(todos[0].completed).toBe(false)
    })

    it('should not toggle a todo that does not exist', () => {
        const result = toggleTodo(1, todos)
        expect(result.error).toBe('Todo not found')
        expect(result.success).toBe(false)
    })
})


describe('Delete todo', () => {
    const todos: Todo[] = [
        {
        id: 0,
        title: "",
        completed: false
        }
    ]
 

    it('should delete a todo', () => {
      const result = deleteTodo(0, todos)
       expect(result.success).toBe(true)
       expect(todos).toEqual([])
    })
    it('should not delete a todo that does not exist', () => {
         const result = deleteTodo(-1, todos)
         expect(result.error).toBe('Todo not found')
         expect(result.success).not.toBe(true)
    })
})

