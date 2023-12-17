// segun el programador practico, las entidades son clases que representan un objeto de dominio
export class TodoEntity {

    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null,
    ) { }

    get isCompleted() {
        return !!this.completedAt;
    }

    public static fromObject(obj: { [key: string]: any }): TodoEntity {
        const { id, text, completedAt } = obj;
        if (!id) throw new Error('Id is required');
        if (!text) throw new Error('Text is required');

        // transformar a Date
        let newCompletedAt
        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (isNaN(newCompletedAt.getTime())) throw new Error('CompletedAt is not a valid date');
        }
        return new TodoEntity(id, text, newCompletedAt);
    }
}