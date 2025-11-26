import { useCallback } from 'react';
import styles from './ConfirmPark.module.css';


const ConfirmPark = () => {
  	
  	const onButtonContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    	<> 
        <div>
            <h2>Park in C Lot</h2>
        </div>

        <div>
            <h3>Parker 120 of 103</h3>
        </div>
        
        <div>
            {/**Image of the Lots here */}
        </div>

        <div>
            <p>Special parking instructions here</p>
        </div>

        <div>
            <button type="button">Confirm Park</button>
        </div>
        </>
    );
};

export default ConfirmPark;
