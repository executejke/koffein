import { Component, Input, OnInit } from '@angular/core';
import { TargetsConfig } from '../../models/targets-config';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss'],
})
export class CircleProgressBarComponent implements OnInit {
  @Input() currentProgress!: number;
  @Input() totalProgress: number = 100;
  @Input() until!: string;

  constructor(private config: TargetsConfig) {}

  ngOnInit() {}

  progressBarBackground(): any {
    const result = (360 / this.totalProgress) * this.currentProgress;
    const color =
      this.currentProgress === this.totalProgress
        ? 'var(--circle-background-completed)'
        : 'var(--circle-background)';
    return `conic-gradient(${color} ${result}deg, #f2f1ff 0deg)`;
  }

  public get displayProgressValue(): string {
    return !this.currentProgress && this.config.zeroProgressLabel
      ? this.config.zeroProgressLabel
      : `${this.currentProgress} / ${this.totalProgress}`;
  }

  hideProgressBar(): boolean {
    return (
      this.until === 'За каждый' ||
      this.config.zeroProgressLabel === 'Пора начинать'
    );
  }
}
