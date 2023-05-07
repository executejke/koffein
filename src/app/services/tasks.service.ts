import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Target } from '../interfaces/Target.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private db: AngularFireDatabase) {}

  public getTargets(path: string):Observable<Target[]> {
    return this.db.list<Target>(path).valueChanges();
  }

  public addToTargets(target: Target) {
    return this.db.list<Target>('targets').push(target)
  }

  public removeFromNewTargets(key: string) {
    return this.db.list<Target>(`new-targets/${key}`).remove()
  }

  public generateTask(path: string) {
    let randomDescription = ['Помыть кофемашину', 'Помыть посуду', 'Отработать 20 дней', 'Продать 100 кофе + десерт ', 'Продать мерч'];
    let randomUntil = ['До 31.07', 'До 04.08', 'До 19.06', 'До 05.07', 'До 04.10'];
    let randomIndex = Math.floor(Math.random() * randomDescription.length)
    const taskData = {
      description: `${randomDescription[randomIndex]}`,
      rewards: {
        coins: 100,
        carma: 300
      },
      until: `${randomUntil[randomIndex]}`,
      totalProgress: 100,
      currentProgress: 0,
    };
    const taskRef = this.db.list(path).push(taskData);
    taskRef.update({id: taskRef.key})
  }

  public deleteAllTasks(path: string) {
    return this.db.list(path).remove()
  }


}
