import { Component } from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {Target} from "../../interfaces/Target.interface";
import {TargetsConfig} from "../../models/targets-config";

@Component({
  selector: 'app-target-dialog',
  templateUrl: './target-dialog.component.html',
  styleUrls: ['./target-dialog.component.scss'],
  providers:[{
    provide: TargetsConfig,
    useValue: new TargetsConfig({})
  }]
})
export class TargetDialogComponent {

  constructor(private config: DynamicDialogConfig) {
  }

  public get target():Target {
    return this.config.data;
  }
}
