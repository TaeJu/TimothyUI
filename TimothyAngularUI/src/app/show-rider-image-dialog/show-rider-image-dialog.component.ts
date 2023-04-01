import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-rider-image-dialog',
  templateUrl: './show-rider-image-dialog.component.html',
  styleUrls: ['./show-rider-image-dialog.component.css']
})
export class ShowRiderImageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages() {
    console.log(this.data);
  }
}
