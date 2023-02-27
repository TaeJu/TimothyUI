
export interface Rider {
    riderId: number;
    name: string;
    preferredLocation: string;
    availableSpot: number;
    currentFillSpot: number;
    riderStatus: boolean;
    lastUpdated: Date;
}