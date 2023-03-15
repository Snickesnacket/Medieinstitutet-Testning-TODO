import { describe, it, expect } from 'vitest'
import { addTodo,  toggleTodo, deleteTodo } from '../functions'
import { Todo } from '../types/Todo'

describe('Add todo', () => {
        const getResult: Todo[] = []
        const title: string = "tjo"; 
        const result = addTodo(title, getResult)

    it('Should add a todo', () =>{
        expect(result.success).toBe(true)
        console.log("this is the result", result)
        
    })

     it.todo('Should not add a todo with empty title ', () => {
         expect(addTodo)
    })
    it.todo('should not add a todo with title shorter than 3 characters', () =>{
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