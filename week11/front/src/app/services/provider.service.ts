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
    return this.get('http://localhost:8000/task_lists/', {});
  }
  getTasks(task_list: ITaskList): Promise<ITask[]>{ 
  	return this.get('http://localhost:8000/task_lists/{{task_list.id}}/tasks', {})
  }
}
