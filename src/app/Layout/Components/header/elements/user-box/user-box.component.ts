import {Component, OnInit, Inject, forwardRef} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import {AppComponent} from '../../../../../app.component';
import {TokenService} from '../../../../../Services/token.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
  constructor(
    public globals: ThemeOptions,
    @Inject (forwardRef(() => AppComponent)) private main: AppComponent,
    private tokenService: TokenService)  {
  }
  public username = null;

  ngOnInit() {
    this.username = this.tokenService.getUser();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.main.logOut();
  }
}
