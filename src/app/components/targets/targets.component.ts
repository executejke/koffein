import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Target } from '../../interfaces/Target.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TargetDialogComponent } from '../target-dialog/target-dialog.component';
import { TargetsConfig } from '../../models/targets-config';


@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss'],
})
export class TargetsComponent implements OnInit {
  @Input() items!: Target[] | null;
  @Output() accept: EventEmitter<Target> = new EventEmitter<Target>();
  ref!: DynamicDialogRef;

  constructor(
    public tasksService: TasksService,
    public dialogService: DialogService,
    public config: TargetsConfig
  ) {}

  show(target: Target) {
    this.ref = this.dialogService.open(TargetDialogComponent, {
      data: target,
    });
  }

  ngOnInit() {}

  acceptTask(item: Target) {
    this.accept.emit(item);
  }
}
