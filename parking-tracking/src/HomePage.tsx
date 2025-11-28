import { useCallback } from 'react';
import styles from './HomePage.module.css';
import CSUSMMap from './assets/CSUSMParkingMap.png'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  	const navigate = useNavigate();

  	const onRectangleClick = useCallback(() => {
    		// Add your code here
  	}, []);

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
                <dt>LOT A</dt>
                <dd>12 spots left</dd>
                
                <dt>LOT B</dt>
                <dd>11 spots left</dd>

                <dt>LOT C</dt>
                <dd>13 spots left</dd>

                <dt>LOT D</dt>
                <dd>14 spots left</dd>
                
                <dt>PS1</dt>
                <dd>120 spots left</dd>
            </dl>
        </div>
        
        <div className={styles.button}>
            <button className={styles.button2} type='button' onClick={Logout}>Logout</button>
        </div>
        </>

    );
    		
};

export default HomePage;
