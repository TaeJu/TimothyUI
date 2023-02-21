import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RideproducerService {

  PATH_OF_API_RIDE_PRODUCER_SERVICE = "http://localhost:9090/ride-producer";

  constructor(private httpclient: HttpClient,
    private userAuthService: UserAuthService) { }

  requestHeader = new HttpHeaders(
    { "No-Auth":"True" }
  );

  public requestRide(rideRequestData) {
    return this.httpclient.post(this.PATH_OF_API_RIDE_PRODUCER_SERVICE + "/rideRequest", rideRequestData, { headers: this.requestHeader, responseType: 'text' });
  }
}
