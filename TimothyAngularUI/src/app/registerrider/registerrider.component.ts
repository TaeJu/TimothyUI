import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RiderServiceService } from '../_services/rider-service.service';

@Component({
  selector: 'app-registerrider',
  templateUrl: './registerrider.component.html',
  styleUrls: ['./registerrider.component.css']
})
export class RegisterriderComponent implements OnInit {

  constructor(private rideService: RiderServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerRiderRequest(registerRiderRequestForm:NgForm) {
      this.rideService.registerRider(registerRiderRequestForm.value).subscribe(
        (resp) => {
          console.log(resp);
          window.alert('success');
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
          window.alert('fail');
          this.router.navigate(['/']);
        }
      );
  }
}
