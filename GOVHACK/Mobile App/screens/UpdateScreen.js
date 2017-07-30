import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {List} from 'native-base'

export default class UpdateScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Update Screen Content here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
