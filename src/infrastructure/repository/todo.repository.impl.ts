import { CreateTodoDto, UpdateTodoDto, TodoDataSource, TodoEntity, TodoRepository } from "../../domain";

export class TodoRepositoryImpl implements TodoRepository {

    constructor(
        private readonly datasource: TodoDataSource
    ) { }

    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.createTodo(createTodoDto)
    }
    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getTodosAll() // esto retorna un entity
    }
    findById(id: number): Promise<TodoEntity> {
        return this.datasource.findTodoById(id)
    }
    updateById(updateTodo: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateTodoById(updateTodo)
    }
    deleteByid(id: number): Promise<TodoEntity> {
        return this.datasource.deleteTodoByid(id)
    }

}