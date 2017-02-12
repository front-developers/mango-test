import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RequestService} from '../../../services/request.service/request.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 't-users',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 't-users.component.html',
  styleUrls: ['t-users.component.styl']
})

export class TUsersComponent implements OnInit {
  local: {
    users: Array<{}>
    sortBy: string
    sortDirection: boolean
    search: null|string
    excludePropsArr: Array<string>
  };
  constructor(
    private _RequestService: RequestService
  ) {
    this.local = {
      users: [],
      sortBy: 'name',
      sortDirection: true,
      search: null,
      excludePropsArr: ['_id', 'index']
    };
  }

  sortBy(prop: string) {
    if (this.local.sortBy === prop) {
      this.local.sortDirection = !this.local.sortDirection;
    }
    this.local.sortBy = prop;
  }

  ngOnInit() {
    this._RequestService.get('http://test.front-devs.com/fakedata/fake.json')
      .map(res => {
        return res.json();
      })
      .subscribe((data) => {
        this.local.users = data;
      });
  }
}
