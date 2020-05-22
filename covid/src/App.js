import React from 'react';
import styles from './App.module.css';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
    //console.log(data);
    //console.log(country);
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}

export default App;