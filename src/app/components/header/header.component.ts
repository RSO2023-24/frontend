import { Component } from '@angular/core';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import {faPersonHiking} from "@fortawesome/free-solid-svg-icons/faPersonHiking";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  iconName = faPersonHiking;
}
