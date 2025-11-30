import { useCallback, useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import CSUSMMap from './assets/CSUSMParkingMap.png'
import { useNavigate } from 'react-router-dom';
import ServerRequester from './middle/ServerRequester';
import { ParkingLot } from './models/ParkingLot';
import { ParkingLotCard } from './components/ParkingLotCard';

const HomePage = () => {
  	const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParkingData = async () => {
            try {
                const server = new ServerRequester();
                console.log("Signing in...");
                const result = await server.testConnection();

                //if API returns { data: [...] }
                const lots = Array.isArray(result) ? result : result.data || result.lots || [];
                setData(lots);
            } catch (err) {
                setError(err.message);
                console.error("Fetch error: ", err)
            };
        };

        fetchParkingData();
    }, []);


  	const onRectangleClick = useCallback(() => {
    		// Add your code here
  	}, []);
    
    const renderParkingLots = () => {
        const lotMap = {};
        const lotDisplayOrder = [];
        data.forEach(lot => {
            const key = lot.name?.trim().toUpperCase().replace('LOT ', '');
            lotDisplayOrder.push(key);
            lotMap[key] = lot;
        });


        return lotDisplayOrder.flatMap(lotKey => {
            const lot = lotMap[lotKey];
            const occupants = lot?.occupants ?? 0;
            const capacity = lot?.capacity ?? 0;
            
            const spotsText = capacity - occupants > 0
                ? `${capacity - occupants} spots left`
                : 'FULL';

            return [
                <>
                <dt>{lotKey}</dt>
                <dd>{spotsText}</dd>
                </>
            ];
        });



    }


    const Logout = () => {
        //clear cookie of the user before navigating back to the login page.
        navigate("/");
        console.log("Logging out");
    };
  	
  	return (
        <>
        <div>
            <h1 className={styles.csusmLogoHere}>CSUSM Parking Tracker</h1>
        </div>
        
        
        <div>
            <img src={CSUSMMap} className={styles.csusmparkingmap1Icon} alt="CSUSM Map" />
        </div>

        <div>
            {/* <table>
                <tr>
                    <th>LOT A</th>
                    <th>LOT B</th>
                    <th>LOT C</th>
                    <th>LOT D</th>
                    <th>PS1</th>
                </tr>

                <tr>
                    <td>12 spots left</td>
                    <td>11 spot left</td>
                    <td>13 spots left</td>
                    <td>14 spots left</td>
                    <td>120 spots left</td>
                </tr> */}

                {/*Insert the table with the trend if we have the time to do it*/}
            {/* </table> */}

            <dl className={styles.rotatedDL}>
                {/**do it semantically with TS once the database is set up */}
                {/* <dt>LOT A</dt>
                <dd>12 spots left</dd>
                
                <dt>LOT B</dt>
                <dd>11 spots left</dd>

                <dt>LOT C</dt>
                <dd>13 spots left</dd>

                <dt>LOT D</dt>
                <dd>14 spots left</dd>
                
                <dt>PS1</dt>
                <dd>120 spots left</dd> */}
                {error ? `Error: ${error}` : renderParkingLots()}
            </dl>
        </div>
        
        <div className={styles.button}>
            <button className={styles.button2} type='button' onClick={Logout}>Logout</button>
        </div>
        </>

    );
    		
};

export default HomePage;
