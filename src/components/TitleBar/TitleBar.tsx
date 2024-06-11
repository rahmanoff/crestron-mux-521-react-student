import React, { useContext, useState, useEffect } from 'react';

// Import the styles from the scss file
import styles from './TitleBar.module.scss';

// Import the CrComLibContext
import { CrComLibContext } from '../../contexts/CrComLibContext';

// Import the WeatherComponent
import WeatherComponent from '../Weather/Weather';

const TitleBarComponent: React.FC = () => {

  /* --------------------------------------------------------------------------------- */
  /* TODO - Exercise 3.1a: Add subscribeState, unsubscribeState between the curly braces */
  /* --------------------------------------------------------------------------------- */
  const { pulseDigital } = useContext(CrComLibContext);

  // Initialize the title state
  /* ------------------------------------------------------------------ */
  /* TODO - Exercise 3.2: Add a state to store our room name.           */
  /* ------------------------------------------------------------------ */
  

  useEffect(() => {

    /* ------------------------------------------------------------------------- */
    /* TODO - Exercise 3.3: Subscribe to the room name indirect text.            */
    /* HINT: - The join for the room name is: 'HeaderBar.RoomNameLabel.Indirect' */
    /* HINT: - The standard method to subscribe to a join is:                    */
    /* HINT: - 'handle = CrComLib.subscribeState(type, join, action)'            */
    /* ------------------------------------------------------------------------- */
   
  

    // Cleanup function for component unmount
    return () => {
      /* ------------------------------------------------------------------------------------------------------- */
      /* TODO - Exercise 3.4: Unsubscribe from the room name indirect text join when the component is destroyed. */
      /* HINT: - The standard method to unsubscribe from a join is:                                              */
      /* HINT: - 'handle = CrComLib.unsubscribeState(type, join, handler)'                                       */
      /* ------------------------------------------------------------------------------------------------------- */
      
    };
    
    /* --------------------------------------------------------------------------------- */
    /* TODO - Exercise 3.1b: Add subscribeState, unsubscribeState to the square brackets  */
    /* --------------------------------------------------------------------------------- */
  
  }, []);

  // Handle the power button click
  const powerClicked = () => {
    console.log('Info -> The power button has been pressed');
    pulseDigital('HeaderBar.PowerButton.Press');
  };

  // Render the component UI
  return (
    <div className={styles["title-bar"]}>
      <button className={styles["title-bar__button--power"]} onClick={powerClicked}>
        <img
          className={styles["title-bar__button--power__icon"]}
          src="images/icons/power.svg" alt="Power"
        />
      </button>
      <div className={styles["title-bar__divider"]}></div>

      {/* -------------------------------------------------------------------------------------
       TODO - Exercise 3.5: Bind the title to the template to show our text.
       HINT. To bind a value to our template, put it in single curly braces { value }.
      ------------------------------------------------------------------------------------- */}
      
      {/* <WeatherComponent /> */}
    </div>
  );
};

export default TitleBarComponent;
