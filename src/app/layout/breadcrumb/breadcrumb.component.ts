import { Component, OnInit } from '@angular/core';
import { strUrl } from "../../utils/utils";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(this.routes.data);
    const currentUrl = location.pathname;
    const breadcrumb = strUrl(currentUrl);
    console.log(breadcrumb);
  }

}
