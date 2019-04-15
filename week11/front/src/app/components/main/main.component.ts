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
      console.log(this.tasks)
  	})
  }

}
