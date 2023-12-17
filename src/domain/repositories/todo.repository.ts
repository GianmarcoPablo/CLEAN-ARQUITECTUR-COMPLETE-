import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entitiy";

export abstract class TodoRepository {
    abstract create(createTodoDto: CreateTodoDto): Promise<TodoEntity>
    //todo: paginacion
    abstract getAll(): Promise<TodoEntity[]>
    abstract findById(id: number): Promise<TodoEntity>
    abstract updateById(updateTodo: UpdateTodoDto): Promise<TodoEntity>
    abstract deleteByid(id: number): Promise<TodoEntity>
}