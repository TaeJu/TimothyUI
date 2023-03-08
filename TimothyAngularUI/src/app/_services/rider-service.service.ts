import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rider } from '../_model/rider.model';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RiderServiceService {

  PATH_OF_API_RIDE_SERVICE = "http://localhost:9090/ride-service";

  constructor(private httpclient: HttpClient,
    private userAuthService: UserAuthService) { }

  requestHeader = new HttpHeaders(
    { "No-Auth":"True" }
  );
  
  public registerRider(riderRequestData) {
    return this.httpclient.post<Rider>(this.PATH_OF_API_RIDE_SERVICE + "/registerRider", riderRequestData, { headers: this.requestHeader});
  }

  public getAllRider(): Observable<Rider[]> {
    return this.httpclient.get<Rider[]>(this.PATH_OF_API_RIDE_SERVICE + "/getAllRider")
  }
}
