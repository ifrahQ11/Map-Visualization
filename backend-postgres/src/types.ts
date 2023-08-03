export interface VehicleData {
    id: string;
    name: string;
    plateNum: string;
    driverName : string;
    driverPhoneNum: string;
    coordinates: {
        lat: number,
        long: number
    }[];
}