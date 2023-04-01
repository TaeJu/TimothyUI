import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandle } from '../_model/file-handle.model';
import { Rider } from '../_model/rider.model';
import { RiderServiceService } from '../_services/rider-service.service';

@Component({
  selector: 'app-registerrider',
  templateUrl: './registerrider.component.html',
  styleUrls: ['./registerrider.component.css']
})
export class RegisterriderComponent implements OnInit {
  isNewRider = true;
  isFileEmpty = true;

  rider: Rider = {
    riderId: null as any,
    name: "",
    preferredLocation: "",
    availableSpot: 0,
    currentFillSpot: 0,
    riderStatus: null as any,
    imageModel: null as any
  }

  fileHandle!: FileHandle;

  constructor(private rideService: RiderServiceService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.rider = this.activatedRoute.snapshot.data['rider'];
    this.fileHandle = this.rider.imageModel;
    
    if (this.rider && this.rider.riderId) {
      this.isNewRider = false;
      this.isFileEmpty = false;
    }
  }

  registerRiderRequest(registerRiderRequestForm:NgForm) {

      const riderFormData = this.prepareFormData(registerRiderRequestForm);

      this.rideService.registerRider(riderFormData).subscribe(
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

  prepareFormData(registerForm:NgForm): FormData {
    const formData = new FormData();

    const rider: Rider = {
      riderId: null as any,
      name: registerForm.value.name,
      preferredLocation: registerForm.value.preferredLocation,
      availableSpot: registerForm.value.availableSpot,
      currentFillSpot: registerForm.value.currentFillSpot,
      riderStatus: registerForm.value.riderStatus,
      imageModel: this.fileHandle
    }

    formData.append(
      'rider',
      new Blob([JSON.stringify(rider)], {type: 'application/json'})
    );

    formData.append(
      'imageRider',
      this.fileHandle.file,
      this.fileHandle.file.name
    )

    return formData;
  }

  onFileSelected(event) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.fileHandle = fileHandle;
      this.isFileEmpty = false;
    }

    console.log(this.fileHandle);
  }

  removeImage() {
    this.fileHandle = {} as FileHandle;
    window.location.reload();
  }

  fileDropped(fileHandle: FileHandle) {
    this.fileHandle = fileHandle;
  }
}
