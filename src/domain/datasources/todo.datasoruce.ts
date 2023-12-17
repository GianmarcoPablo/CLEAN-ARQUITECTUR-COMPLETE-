import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entitiy";

export abstract class TodoDataSource {
    abstract createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity>
    //todo: paginacion
    abstract getTodosAll(): Promise<TodoEntity[]>
    abstract findTodoById(id: number): Promise<TodoEntity>
    abstract updateTodoById(updateTodo: UpdateTodoDto): Promise<TodoEntity>
    abstract deleteTodoByid(id: number): Promise<TodoEntity>
}