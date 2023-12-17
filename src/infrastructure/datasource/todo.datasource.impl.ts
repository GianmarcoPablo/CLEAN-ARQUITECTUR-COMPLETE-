import { prisma } from "../../data/postgres"
import { CreateTodoDto, TodoDataSource, TodoEntity, UpdateTodoDto } from "../../domain";

export class TodoDataSourceImpl implements TodoDataSource {

    async createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        const todo = await prisma.todo.create({ data: createTodoDto }) // me retorna el todo creado
        return TodoEntity.fromObject(todo); // lo convierto a un objeto de dominio
    }

    async getTodosAll(): Promise<TodoEntity[]> {
        const todos = await prisma.todo.findMany();
        return todos.map((todo) => TodoEntity.fromObject(todo))
    }

    async findTodoById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findFirst({ where: { id } });
        if (!todo) throw `Todo with id ${id} not found`
        return TodoEntity.fromObject(todo);
    }

    async updateTodoById(updateTodo: UpdateTodoDto): Promise<TodoEntity> {
        const todo = await this.findTodoById(updateTodo.id);
        if (!todo) throw `Todo with id ${updateTodo.id} not found`
        const updatedTodo = await prisma.todo.update({
            where: { id: updateTodo.id },
            data: updateTodo!.values
        })
        return TodoEntity.fromObject(updatedTodo);
    }

    async deleteTodoByid(id: number): Promise<TodoEntity> {
        await this.findTodoById(id);
        const deletedTodo = await prisma.todo.delete({ where: { id } })
        return TodoEntity.fromObject(deletedTodo);
    }
}

