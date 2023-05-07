import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {Observable} from 'rxjs';
import { Target } from '../../interfaces/Target.interface';
import {TargetsConfig} from "../../models/targets-config";

@Component({
  selector: 'app-targets-active',
  templateUrl: './targets-active.component.html',
  styleUrls: ['./targets-active.component.scss'],
  providers: [{
    provide: TargetsConfig,
    useValue: new TargetsConfig({})
  }]
})
export class TargetsActiveComponent implements OnInit {
  public targets$!: Observable<Target[]>;

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.targets$ = this.taskService.getTargets('targets');
  }




}
