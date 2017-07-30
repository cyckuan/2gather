import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {List} from 'native-base'

export default class OverviewScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Overview goes here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20
  }
})
