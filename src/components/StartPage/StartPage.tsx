import React, { useContext } from 'react';

// Import the styles from the scss file
import styles from './StartPage.module.scss';

// Import the CrComLibContext
/* ------------------------------------------------- */
// TODO - Exercise 2.3a: Declare the CrComLib object.
/* ------------------------------------------------- */


const StartPage = () => {

  // Access the pulseDigital function
  /* ------------------------------------------------- */
  // TODO - Exercise 2.3b: Declare the CrComLib object.
  /* ------------------------------------------------- */
  
  /** The start button has been clicked  */
  const onStartButtonClicked = () => {
    // Write to console what has happened.
    console.log('Info -> The start button has been clicked.');

    /* ------------------------------------------------------------------------------------------------------------------------- */
    /* TODO - Exercise 2.4: Publish an event to the CrComLib when the start button is clicked.                                   */
    /* HINT: - The contract name for the start button is: 'StartPage.Button.Press'                                               */
    /* HINT: - The standard method to publish an event to the CrComLib is: 'CrComLib.publishEvent(type, join, value)'            */
    /* HINT: - The alternative method to pulse a digital is to use the included extension method: 'CrComLib.pulseDigital(join)'  */
    /* ------------------------------------------------------------------------------------------------------------------------- */
    
  };

  return (
    /* ------------------------------------------------------------- */
    // TODO - Exercise 2.1: add the HTML for the start button
    // HINT: The class name for the button style is "page__start-button"
    /* ------------------------------------------------------------- */

    /* ---------------------------------------------------------------------------------------- */
    // TODO - Exercise 2.2: Add the OnStartButtonClicked function and hook it up to the button.
    /* ---------------------------------------------------------------------------------------- */
    
    <></>
  );
}

export default StartPage;
