import { Rider } from "./rider.model";

export interface RideRequest {
    rideId: number;
    requestName: string;
    location: string;
    dateCreated: Date;
    lastUpdated: Date;
    rider: Rider;
}