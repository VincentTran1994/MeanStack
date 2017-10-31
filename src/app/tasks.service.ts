import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TasksService {

  constructor(private http: Http) {
    console.log('Task service is initialized ....');
   }

   getTasks(){
     return this.http.get('http://localhost:3000/api/tasks')
        .map(res=> res.json());
   }

   addTask(newTask){
   
     var header = new Headers();
     header.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), {headers: header})
      .map(res => res.json());
   }
}
