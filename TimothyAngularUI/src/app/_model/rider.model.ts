import { FileHandle } from "./file-handle.model";
import { RideRequest } from "./riderequest.model";

export interface Rider {
    //riderId: number;
    name: string;
    preferredLocation: string;
    availableSpot: number;
    currentFillSpot: number;
    riderStatus: boolean;
    //lastUpdated: Date;
    //requests: RideRequest;
    imageModel: FileHandle;
}