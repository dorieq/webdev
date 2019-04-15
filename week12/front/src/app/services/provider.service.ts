import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import {ITaskList, ITask} from '../models/models'

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  constructor(http: HttpClient) { 
    super(http)
  }
  getTaskList(): Promise<ITaskList[]>{
    return this.get('http://localhost:8000/api/task_lists/', {});
  }
  getTasks(task_list: ITaskList): Promise<ITask[]>{ 
  	return this.get('http://localhost:8000/api/task_lists/{{task_list.id}}/tasks', {})
  }
  createTaskList(name:String): Promise<ITaskList>{
    return this.post('http://localhost:8000/api/task_lists/', {
      name: name
    })
  }
  updateTaskList(task_list: ITaskList){
    return this.put('http://localhost:8000/api/task_lists/${task_list.id}/', {
      name: task_list.name
    })
  }
  deleteTaskList(id: number){
    return this.delet('http://localhost:8000/api/task_lists/${id}', {})
  }
}
