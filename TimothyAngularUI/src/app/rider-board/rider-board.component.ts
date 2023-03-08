import { Component, OnInit } from '@angular/core';
import { Rider } from '../_model/rider.model';
import { RiderServiceService } from '../_services/rider-service.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-rider-board',
  templateUrl: './rider-board.component.html',
  styleUrls: ['./rider-board.component.css']
})
export class RiderBoardComponent implements OnInit {

  displayedColumns: string[] = ["RiderId", "RiderName", "Location", "CurrentSpot"];
  riderDetails: Rider[] = [];

  constructor(private rideService: RiderServiceService) { }

  ngOnInit(): void {
    this.getAllRiderInformation();
  }

  getAllRiderInformation() {
    this.rideService.getAllRider().subscribe(
      (resp: Rider[]) => {
        this.riderDetails = resp;
        console.log(this.riderDetails);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
