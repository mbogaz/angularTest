import { Component, OnInit } from '@angular/core';
import {DenemeModel} from './DenemeModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification2',
  templateUrl: './notification2.component.html',
  styleUrls: ['./notification2.component.css']
})
export class Notification2Component implements OnInit {

  constructor(private http: HttpClient) {}

  denemeApi = 'http://worldtimeapi.org/api/ip';

  denemeData: DenemeModel;



  ngOnInit() {

    console.log('start');
    this.http.get(this.denemeApi).toPromise().then(response => {
      console.log(response);
      this.denemeData = response as DenemeModel;
    });
  }

}
