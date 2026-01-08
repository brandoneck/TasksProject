import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface Task{
    id: number;
    title: string;
    completed: boolean;
}

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    getTasks() : Task[] {
        return this.tasks;
    }

    getTaskById(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);

        if (!taskFound) {
                return new NotFoundException('Task with id ' + id + ' not found');
            }

            return taskFound;
    }

    createTask(task: CreateTaskDto) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return { message: 'Task created successfully', task };
    }

    updateTask(id: string, task: UpdateTaskDto) {
        const taskIndex = this.tasks.findIndex(t => t.id === parseInt(id));
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...task };
        }
        return { message: 'Task ' + id + ' updated successfully' };
    }

    deleteTask(id: string) {
        return { message: 'Task ' + id + ' deleted successfully' };
    }

    patchTask(id: string) {
        return { message: 'Task ' + id + ' marked as complete' };
    }

}
