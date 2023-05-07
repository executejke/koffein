import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss'],
})
export class TargetsComponent implements OnInit {
  targets$ = this.dbService.targets$;
  taskCounter: number = 1;
  until!: string;



  constructor(private dbService: TasksService) {}
  ngOnInit() {

  }

}
