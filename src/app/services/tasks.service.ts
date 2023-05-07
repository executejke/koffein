import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  targets$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.targets$ = db.list('targets').valueChanges();
  }
}
