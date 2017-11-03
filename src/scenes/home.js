import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button 
          title='Back'
          onPress={() => this.props.navigation.goBack()}
        />
        <Button 
          title='to feed'
          onPress={() => this.props.navigation.navigate('Feed')}
        />
      </View>
    );
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
