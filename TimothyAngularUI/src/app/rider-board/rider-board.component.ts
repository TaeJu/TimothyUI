import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ImageProcessingService } from '../image-processing.service';
import { ShowRiderImageDialogComponent } from '../show-rider-image-dialog/show-rider-image-dialog.component';
import { Rider } from '../_model/rider.model';
import { RiderServiceService } from '../_services/rider-service.service';

@Component({
  selector: 'app-rider-board',
  templateUrl: './rider-board.component.html',
  styleUrls: ['./rider-board.component.css']
})
export class RiderBoardComponent implements OnInit {

  displayedColumns: string[] = ["RiderId", "RiderName", "Location", "CurrentSpot", "Images"];
  riderDetails: Rider[] = [];

  constructor(private rideService: RiderServiceService,
    public imageDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllRiderInformation();
  }

  getAllRiderInformation() {
    this.rideService.getAllRider()
    .pipe(
      map((x: Rider[], i) => x.map((rider: Rider) => this.imageProcessingService.createImages(rider)))
    )
    .subscribe(
      (resp: Rider[]) => {
        this.riderDetails = resp;
        console.log(this.riderDetails);
      }, (err) => {
        console.log(err);
      }
    );
  }

  showImage(rider: Rider) {
    console.log(rider);
    this.imageDialog.open(ShowRiderImageDialogComponent, {
      data: {
        images: rider.imageModel
      },
      height: '500px',
      width: '800px'
    });
  }

  editRider(riderId) {
    this.router.navigate(['/registerRider', {riderId: riderId}])
  }
}
