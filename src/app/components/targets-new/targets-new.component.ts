import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';
import { Target } from '../../interfaces/Target.interface';
import {TargetsConfig} from "../../models/targets-config";

@Component({
  selector: 'app-targets-new',
  templateUrl: './targets-new.component.html',
  styleUrls: ['./targets-new.component.scss'],
  providers: [{
    provide: TargetsConfig,
    useValue: new TargetsConfig({isNew: true, zeroProgressLabel: 'Пора начинать'})
  }]
})
export class TargetsNewComponent implements OnInit {
  public targets$!: Observable<Target[]>;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.targets$ = this.tasksService.getTargets('new-targets');

  }

  onAccept($event: Target) {
    this.tasksService.addToTargets($event)
    this.tasksService.removeFromNewTargets($event.id)
  }

  generateTask() {
    this.tasksService.generateTask('new-targets')
  }

  deleteAllTasks() {
    this.tasksService.deleteAllTasks('new-targets')
  }


}
