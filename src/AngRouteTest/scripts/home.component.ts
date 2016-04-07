import {Component}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {ConnectionInfo}   from './connection-info';


@Component({
    template: `
    <h2>Home</h2>
    <div>
        <label>Server: </label>
        <input [(ngModel)]="conn.servername" placeholder="server"/>
    </div>
    <div>
        <label>Database: </label>
        <input [(ngModel)]="conn.databasename" placeholder="database"/>
    </div>
  `
})


export class HomeComponent {
    conn: ConnectionInfo;




}