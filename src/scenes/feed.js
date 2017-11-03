import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Feed extends React.Component {
  render() {
    return <View style={styles.container}>
        <Text style={styles.title}>Feed</Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
        <Button title="to home" onPress={() => this.props.navigation.navigate("Home")} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
