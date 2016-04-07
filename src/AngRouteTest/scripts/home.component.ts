import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {ConnectionInfo}   from './connection-info';


@Component({
    template: `
    <h3>Home</h3>
    <div>
        <label>Server: </label>
        <input [(ngModel)]="conn.servername" placeholder="server"/>{{conn.servername}}
    </div>
    <div>
        <label>Database: </label>
        <input [(ngModel)]="conn.databasename" placeholder="database"/>{{conn.databasename}}
    </div>
  `
})


export class HomeComponent implements OnInit {
    public conn: ConnectionInfo;


    ngOnInit() {
        this.conn = new ConnectionInfo();

        this.conn.servername = "TARGHEE";
        this.conn.databasename = "BookmarkTool";
    }

}