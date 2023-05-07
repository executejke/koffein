import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {Observable} from "rxjs";
import {Target} from "../../interfaces/Target.interface";
import {TargetsConfig} from "../../models/targets-config";

@Component({
  selector: 'app-targets-archive',
  templateUrl: './targets-archive.component.html',
  styleUrls: ['./targets-archive.component.scss'],
  providers: [{
    provide: TargetsConfig,
    useValue: new TargetsConfig({})
  }]
})
export class TargetsArchiveComponent implements OnInit {
  public targets$!:Observable<Target[]>

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.targets$ = this.tasksService.getTargets('archive-targets')
  }


}
