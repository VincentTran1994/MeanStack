import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task} from '../../../task';


@Component({
  selector: 'tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  tasks : Task[];
  title: String;

  constructor(private TaskService: TasksService) {
    

    this.TaskService.getTasks().subscribe(task => {
      this.tasks = task;
    })
  }


  onSubmit(event){

    var newTask : any = {
      title: this.title,
      isDone: false
    }

    this.TaskService.addTask(newTask)
      .subscribe(task =>{
        this.tasks.push(newTask);
        this.title = "";
      });

    
  }
}
