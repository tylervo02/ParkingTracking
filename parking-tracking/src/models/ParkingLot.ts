export class ParkingLot {
    private name: string;
    private availableSpaces: number;
    private totalSpaces: number;
    private observers: Array<(lot: ParkingLot) => void>;

    constructor(name: string, totalSpaces: number) {
        this.name = name;
        this.totalSpaces = totalSpaces;
        this.availableSpaces = totalSpaces;
        this.observers = [];
    }

    isOpen(): boolean {
        return this.availableSpaces > 0;
    }

    parkCar(): boolean {
        if (this.availableSpaces > 0) {
            const oldSpaces = this.availableSpaces;
            this.availableSpaces--;
            console.log(`Car parked in ${this.name}. Spaces: ${oldSpaces} -> ${this.availableSpaces}`);
            this.notifyObservers();
            return true;
        }
        return false;
    }

    carLeaves(): boolean {
        if (this.availableSpaces < this.totalSpaces) {
            const oldSpaces = this.availableSpaces;
            this.availableSpaces++;
            console.log(`Car left ${this.name}. Spaces: ${oldSpaces} -> ${this.availableSpaces}`);
            this.notifyObservers();
            return true;
        }
        return false;
    }

    getName(): string { return this.name; }
    getAvailableSpaces(): number { return this.availableSpaces; }
    getTotalSpaces(): number { return this.totalSpaces; }

    registerObserver(callback: (lot: ParkingLot) => void): void {
        this.observers.push(callback);
    }

    removeObserver(callback: (lot: ParkingLot) => void): void {
        const index = this.observers.indexOf(callback);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        this.observers.forEach(callback => {
            callback(this);
        });
    }

    getOccupancyPercentage(): number {
        return ((this.totalSpaces - this.availableSpaces) / this.totalSpaces) * 100;
    }
}