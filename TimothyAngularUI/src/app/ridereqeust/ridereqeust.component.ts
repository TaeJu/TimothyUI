import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RideproducerService } from '../_services/rideproducer.service';

@Component({
  selector: 'app-ridereqeust',
  templateUrl: './ridereqeust.component.html',
  styleUrls: ['./ridereqeust.component.css']
})
export class RidereqeustComponent implements OnInit {

  constructor(private rideProducerService: RideproducerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  rideRequest(rideRequestForm:NgForm) {
    this.rideProducerService.requestRide(rideRequestForm.value).subscribe(
      (resp) => {
        console.log(resp);
        window.alert('success');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
