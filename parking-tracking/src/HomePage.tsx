import { useCallback } from 'react';
import styles from './HomePage.module.css';


const HomePage = () => {
  	
  	const onRectangleClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
        <>
        <div>
            <h1>CSUSM LOGO</h1>
        </div>
        
        <div>
            <h1>Image of maps</h1>
        </div>
        
        <div>
            <a href="">Logout</a>
        </div>
        <div>
            <table>
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
                </tr>

                {/*Insert the table with the trend if we have the time to do it*/}
            </table>
        </div>

        </>

    );
    		
};

export default HomePage;
