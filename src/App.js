import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// eslint-disable-next-line
import './style.css';

const styles={
    divStyle: {
        backgoundColor: 'black',
        color: 'white'
    }
};

const App = () => <PortfolioContainer style={styles.divStyle} />;

export default App;
