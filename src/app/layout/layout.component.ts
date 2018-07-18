import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, NavigationEnd, NavigationError } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isFetching = false;
  isCollapsed = false;

  constructor(
    router: Router,
    private _message: NzMessageService,
  ) {
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    })
  }



  ngOnInit() {
  }

  onToogleCollapsed(isCollapsed) {
    this.isCollapsed = isCollapsed;
  }

}
