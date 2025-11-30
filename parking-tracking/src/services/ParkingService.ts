import { ParkingLot } from '../models/ParkingLot';

export class ParkingService {
    private parkingLots: ParkingLot[];
    private notificationCallbacks: Array<(message: string) => void> = [];

    constructor() {
        this.parkingLots = [];
        this.initializeSampleData();
    }

    private initializeSampleData(): void {
        const lots = [
            new ParkingLot('Lot A', 50),
            new ParkingLot('Lot B', 30),
            new ParkingLot('Lot C', 40),
            new ParkingLot('Lot D', 25),
            new ParkingLot('Lot E', 35),
            new ParkingLot('Lot F', 20)
        ];

        lots.forEach(lot => {
            lot.registerObserver((updatedLot) => {
                this.handleLotUpdate(updatedLot);
            });
        });

        this.parkingLots = lots;
    }

    private handleLotUpdate(lot: ParkingLot): void {
        if (lot.getAvailableSpaces() === 0) {
            this.sendNotification(`🚨 ${lot.getName()} is now FULL!`);
        } else if (lot.getAvailableSpaces() === 1) {
            this.sendNotification(`⚠️ ${lot.getName()} has only 1 space left!`);
        } else if (lot.getAvailableSpaces() === lot.getTotalSpaces()) {
            this.sendNotification(`✅ ${lot.getName()} is now EMPTY and has plenty of spaces!`);
        }

        this.notificationCallbacks.forEach(callback => {
            callback(`Lot ${lot.getName()} updated: ${lot.getAvailableSpaces()} spaces available`);
        });
    }

    getAllParkingLots(): ParkingLot[] {
        return [...this.parkingLots];
    }

    getLotByName(name: string): ParkingLot | undefined {
        return this.parkingLots.find(lot => lot.getName().toLowerCase() === name.toLowerCase());
    }

    parkCar(lotName: string): boolean {
        const lot = this.getLotByName(lotName);
        return lot ? lot.parkCar() : false;
    }

    carLeaves(lotName: string): boolean {
        const lot = this.getLotByName(lotName);
        return lot ? lot.carLeaves() : false;
    }

    registerNotificationCallback(callback: (message: string) => void): void {
        this.notificationCallbacks.push(callback);
    }

    private sendNotification(message: string): void {
        console.log(`NOTIFICATION: ${message}`);
        this.notificationCallbacks.forEach(callback => {
            callback(message);
        });
    }

    simulateRandomActivity(): void {
        const lot = this.parkingLots[Math.floor(Math.random() * this.parkingLots.length)];
        if (Math.random() > 0.5) {
            lot.parkCar();
        } else {
            lot.carLeaves();
        }
    }
}