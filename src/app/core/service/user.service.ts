import { Injectable } from '@angular/core';
import { Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  repodata = [
    {title : 'Get the best out of bootstrap 4',
    description: 'i dunno this is demo bro',
    imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/1.jpg'},
    {title : 'Love is free shipping away',
    description: 'learn all you need in this',
    imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/4.jpg'},
    {title : 'Exploring the grass lands of Africa',
    description: 'the grass the green',
    imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/6.jpg'},
    {title : 'Roman PSD stuffs and more',
    description: 'learn all you need in this',
    imageUrl : 'https://raw.githubusercontent.com/abbasogaji/angularUX-skeleton-screen/master/src/assets/img/7.jpg'}
  ];
  userdata = { name: 'Kumar Shan', email: 'Kumarshan@example.com'};
  obs = new Subject();
  fetchData() {
    setTimeout(() => {
        this.obs.next({userdata : this.userdata, repodata : this.repodata });
    }, 2000);
    return this.obs;
  }
}
