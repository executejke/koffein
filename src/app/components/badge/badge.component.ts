import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit{
  public newTasksValue: any;

  constructor(private taskService: TasksService) {
  }

  ngOnInit(): void {
    this.countNewTasks()
  }

  countNewTasks():any {
  let subscribe = this.taskService.getTargets('new-targets').subscribe(value => {
   this.newTasksValue = value.length;
  })
    if(this.newTasksValue) {
      subscribe.unsubscribe()
    }
  }

}
