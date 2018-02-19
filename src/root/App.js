import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/app.style';
import NavigationBar from '../components/Header/NavigationBar';
import HomePage from '../components/Body/Home/homePage';



class App extends React.Component {
  render() {
    return (
      <View style={styles.dev_web_container}>
        <View style={styles.phone}>
          <View style={styles.container}>
            <NavigationBar />
            <HomePage />
          </View>
        </View>
      </View>
    );
  }
}

export default App;