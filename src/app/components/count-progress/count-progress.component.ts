import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-progress',
  templateUrl: './count-progress.component.html',
  styleUrls: ['./count-progress.component.scss'],
})
export class CountProgressComponent implements OnInit {
  @Input() currentProgress!: number;
  @Input() totalProgress: number = 100;
  @Input() count!: number;

  constructor() {}

  ngOnInit(): void {}

  taskProgress(): any {
    const backgroundImage =
      this.currentProgress === this.totalProgress
        ? 'var(--count-background-complete)'
        : 'var(--count-background)';
    const countVisible = 'var(--count-visible)';
    return { background: backgroundImage, color: countVisible };
  }
}
