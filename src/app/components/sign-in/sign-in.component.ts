import { Component } from '@angular/core';
import {faPersonHiking} from "@fortawesome/free-solid-svg-icons/faPersonHiking";
import { FormsModule } from '@angular/forms';
import {ServiceService} from "../../services/service.service";
import {environment} from "../../../environment/environment"; // Import FormsModule

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  name: string = '';
  lastName: string = '';
  iconName = faPersonHiking;

  constructor(private service: ServiceService) {
  }


  signIn() {
    this.service.createUser(this.name,this.lastName).subscribe(res => {
      environment.lat = res.longtitude;
      environment.lon = res.latitude;
    })
  }
}