import React from 'react';
import { ParkingLot } from '../models/ParkingLot';

interface ParkingLotCardProps {
    lot: ParkingLot;
    onParkCar: (lotName: string) => void;
    onCarLeaves: (lotName: string) => void;
}

export const ParkingLotCard: React.FC<ParkingLotCardProps> = ({ 
    lot, 
    onParkCar, 
    onCarLeaves 
}) => {
    const occupancyPercentage = lot.getOccupancyPercentage();
    const isOpen = lot.isOpen();

    return (
        <div className={`parking-lot-card ${!isOpen ? 'full' : ''}`}>
            <div className="lot-header">
                <h3>{lot.getName()}</h3>
                <span className={`status-badge ${isOpen ? 'open' : 'full'}`}>
                    {isOpen ? 'OPEN' : 'FULL'}
                </span>
            </div>
            
            <div className="spaces-info">
                <div className="space-count">
                    {lot.getAvailableSpaces()} / {lot.getTotalSpaces()} spaces
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${occupancyPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="actions">
                <button 
                    onClick={() => onParkCar(lot.getName())} 
                    disabled={!isOpen}
                    className="park-btn"
                >
                    🚗 Park Car
                </button>
                <button 
                    onClick={() => onCarLeaves(lot.getName())} 
                    disabled={lot.getAvailableSpaces() === lot.getTotalSpaces()}
                    className="leave-btn"
                >
                    🚙 Car Leaves
                </button>
            </div>
        </div>
    );
};