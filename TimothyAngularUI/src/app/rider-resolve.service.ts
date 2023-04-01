import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ImageProcessingService } from './image-processing.service';
import { Rider } from './_model/rider.model';
import { RiderServiceService } from './_services/rider-service.service';

@Injectable({
  providedIn: 'root'
})
export class RiderResolveService implements Resolve<Rider> {

  constructor(private rideService: RiderServiceService,
    private imageProcessingService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rider> {
    
    const id = route.paramMap.get("riderId");

    if (id) {
      console.log(this.rideService.getRiderDetailsById(id));
      return this.rideService.getRiderDetailsById(id)
        .pipe(
          map(r => this.imageProcessingService.createImages(r))
        );
    } else {
      return of(this.getRiderDetails());
    }
  }

  getRiderDetails() {
    return {
      riderId: null as any,
      name: "",
      preferredLocation: "",
      availableSpot: 0,
      currentFillSpot: 0,
      riderStatus: null as any,
      imageModel: null as any
    };
  }
}
