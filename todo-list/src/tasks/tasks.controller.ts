import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getTasks(){}

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id:number){}

    @Post()
    createTask(@Body() newTask:CreateTaskDto){}

    @Patch('/:id')
    updateTask(@Param('id', ParseIntPipe) id:number){}

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id:number){}
}
