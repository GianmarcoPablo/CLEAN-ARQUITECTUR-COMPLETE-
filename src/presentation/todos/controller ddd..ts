import { Request, Response } from 'express';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { TodoRepository } from '../../domain';

export class TodosController {

    //* DI
    constructor(
        private readonly todoRepository: TodoRepository
    ) { }

    public getTodos = async (req: Request, res: Response) => {
        const todos = await this.todoRepository.getAll();
        res.json(todos);
    };

    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const todo = await this.todoRepository.findById(id);
            res.json(todo);
        } catch (error) {
            res.status(404).json({ error: `Todo with id ${id} not found` });
        }
    };

    public createTodo = async (req: Request, res: Response) => {

        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const todo = await this.todoRepository.create(createTodoDto!);
        res.json(todo);
    };

    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        try {
            const updatedTodo = await this.todoRepository.updateById(updateTodoDto!);
            res.json(updatedTodo);
        } catch (error) {
            res.status(404).json({ error: `Todo with id ${id} not found` });
        }
    }


    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const deletedTodo = await this.todoRepository.deleteByid(id);
            res.json(deletedTodo);
        } catch (error) {
            res.status(404).json({ error: `Todo with id ${id} not found` });
        }
    }
}