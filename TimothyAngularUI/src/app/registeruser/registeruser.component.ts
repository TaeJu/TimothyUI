import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(registerUserForm: NgForm) {
    console.log(registerUserForm.value);
    this.userService.registerUser(registerUserForm.value).subscribe(
      (resp) => {
        window.alert('success');
        this.router.navigate(['/login']);
      },
      (err) => {
        window.alert('fail');
        console.log(err);
      }
    )
  }
}
