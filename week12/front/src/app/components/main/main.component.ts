import { Component, OnInit } from '@angular/core';
import { ITask, ITaskList } from 'src/app/models/models';
import {ProviderService} from '../../services/provider.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private provider: ProviderService) { }
  public taskLists: ITaskList[] = []
  public tasks: ITask[] = []
  public n: any
  public loading = false 
  ngOnInit() {
    this.provider.getTaskList().then(res => {
      this.taskLists = res
      setTimeout(() => {
        this.loading = true
      }, 2000)
    })
  }
  getTasks(task_list: ITaskList){
  	this.provider.getTasks(task_list).then(res => {
  		this.tasks = res
  	})
  }
  updateTaskList(task_list: ITaskList){
    this.provider.updateTaskList(task_list).then(res =>
      console.log(task_list.name + 'updated'))
  }

  deleteTaskList(task_list: ITaskList){
    this.provider.deleteTaskList(task_list.id).then(res => {
      console.log(task_list.name + 'deleted')
      this.provider.getTaskList().then(res =>{
        this.taskLists = res
      })
    })
  }

  createTaskList(){
    if (this.n !==''){
      this.provider.createTaskList(this.n).then(res => {
        this.n = ''
        this.taskLists.push(res)
      })
    }
  }

}
