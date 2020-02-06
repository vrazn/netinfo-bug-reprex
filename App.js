import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class App extends React.Component {
  state = {
    isInternetReachable: true,
  };

  componentDidMount() {
    this.unsubscribeNetInfo = NetInfo.addEventListener(this.handleConnectionChange);
    this.checkInternetConnection();
  }

  componentWillUnmount() {
    this.unsubscribeNetInfo();
  }

  checkInternetConnection = () => {
    NetInfo.fetch().then(this.handleConnectionChange);
  };

  handleConnectionChange = ({ isInternetReachable }) => {
    if (isInternetReachable != null) {
      Alert.alert('Intenret reachable', isInternetReachable.toString());
      this.setState({ isInternetReachable });
    }
  };

  render() {
    const { isInternetReachable } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`The internet is${isInternetReachable ? '' : ' not'} reachable`}</Text>
        <Button onPress={this.checkInternetConnection} title="Check again" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
