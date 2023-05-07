import {Component, Input, OnInit} from '@angular/core';
import {Target} from "../../interfaces/Target.interface";

@Component({
  selector: 'app-targets-wrapper',
  templateUrl: './targets-wrapper.component.html',
  styleUrls: ['./tragets-wrapper.component.scss']
})
export class TargetsWrapperComponent implements OnInit{
  @Input() items!: Target[] | null;



  ngOnInit(): void {

  }



}
