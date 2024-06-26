import { describe, it, expect, beforeEach } from 'vitest';
import { addTodo, toggleTodo, deleteTodo } from '../functions';
import { Todo } from '../types/Todo';

describe('addTodo', () => {
    let todos: Todo[] = [];

    beforeEach(() => {
        todos = [];
    });

    it('Should add a todo', () => {
        const newTodoTitle = 'New todo';
        const result = addTodo(newTodoTitle, todos);

        expect(result.success).toBe(true);
        expect(todos[0].title).toBe(newTodoTitle);
        expect(todos.length).toBe(1);
    });

    it('Should not add a todo with empty title', () => {
        const result = addTodo('', todos);
        expect(todos.length).toBe(0);
        expect(result.error).toBe('Title cannot be empty');
        expect(result.success).toBe(false);
    });

    it('Should not add a todo with title shorter than 3 characters', () => {
        const result = addTodo('No', todos);
        expect(result.error).toBe('Title must be at least 3 characters long');
        expect(result.success).toBe(false);
        expect(todos.length).toBe(0);
    });
});

describe('Toggle todo', () => {
    let todos: Todo[] = [];

    beforeEach(() => {
        todos = [{ id: 0, title: "Test Todo", completed: false }];
    });

    it('Should toggle a todo', () => {
        const id = 0;
        const result = toggleTodo(id, todos);
        expect(result.success).toBe(true);
        expect(todos[0].completed).toBe(true);
    });

    it('Should not toggle a todo that does not exist', () => {
        const result = toggleTodo(1, todos);
        expect(result.error).toBe('Todo not found');
        expect(result.success).toBe(false);
    });
});

describe('Delete todo', () => {
    let todos: Todo[] = [];

    beforeEach(() => {
        todos = [{ id: 0, title: "Test Todo", completed: false }];
    });

    it('Should delete a todo', () => {
        const result = deleteTodo(0, todos);
        expect(result.success).toBe(true);
        expect(todos).toEqual([]);
    });

    it('Should not delete a todo that does not exist', () => {
        const result = deleteTodo(-1, todos);
        expect(result.error).toBe('Todo not found');
        expect(result.success).toBe(false);
    });
});
