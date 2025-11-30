import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import CSUSMMap from './assets/CSUSMParkingMap.png'
import { useNavigate } from 'react-router-dom';
import ServerRequester from './middle/ServerRequester';
import { ParkingLot } from './models/ParkingLot';
import { ParkingLotCard } from './components/ParkingLotCard';

const HomePage = () => {
  const navigate = useNavigate();
  const [parkingLots, setParkingLots] = useState<ParkingLot[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState('');

  // Initialize parking lots with observer pattern
  useEffect(() => {
    // Create parking lots (you can replace this with backend data later)
    const lots = [
      new ParkingLot('Lot A', 50),
      new ParkingLot('Lot B', 30),
      new ParkingLot('Lot C', 20),
      new ParkingLot('Lot D', 40),
      new ParkingLot('PS1', 120)
    ];

    // Register observers for real-time updates
    lots.forEach(lot => {
      lot.registerObserver((updatedLot) => {
        console.log('OBSERVER: ' + updatedLot.getName() + ' updated - ' + updatedLot.getAvailableSpaces() + '/' + updatedLot.getTotalSpaces() + ' spaces');
        setLastUpdate(new Date().toLocaleTimeString());
        // Force re-render by updating state
        setParkingLots(prev => [...prev]);
      });
    });

    setParkingLots(lots);
  }, []);

  // Team's backend data fetching (optional - for future integration)
  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const server = new ServerRequester();
        console.log("Fetching parking data from backend...");
        const result = await server.testConnection();
        console.log("Backend data:", result);
        // You can integrate this with your observer lots later
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        console.error("Backend fetch error: ", err)
      };
    };

    fetchParkingData();
  }, []);

  const onParkCar = (lotName: string) => {
    const lot = parkingLots.find(l => l.getName() === lotName);
    if (lot && lot.parkCar()) {
      console.log('Car parked in ' + lotName);
    } else {
      console.log('Failed to park in ' + lotName + ' - lot full');
    }
  };

  const onCarLeaves = (lotName: string) => {
    const lot = parkingLots.find(l => l.getName() === lotName);
    if (lot && lot.carLeaves()) {
      console.log('Car left ' + lotName);
    }
  };

  const Logout = () => {
    navigate("/");
    console.log("Logging out");
  };

  return (
    <>
      <div>
        <h1 className={styles.csusmLogoHere}>CSUSM Parking Tracker</h1>
        <p>Observer Pattern Active - Real-time updates</p>
        <p>Last update: {lastUpdate || 'No updates yet'}</p>
        {error && <p style={{color: 'red'}}>Backend error: {error}</p>}
      </div>

      <div>
        <img src={CSUSMMap} className={styles.csusmparkingmap1Icon} alt="CSUSM Map" />
      </div>

      {/* Interactive Parking Lots with Observer Pattern */}
      <div className={styles.parkingLotsContainer}>
        {parkingLots.map(lot => (
          <ParkingLotCard
            key={lot.getName()}
            lot={lot}
            onParkCar={onParkCar}
            onCarLeaves={onCarLeaves}
          />
        ))}
      </div>

      <div className={styles.button}>
        <button className={styles.button2} type='button' onClick={Logout}>Logout</button>
      </div>
    </>
  );
};

export default HomePage;