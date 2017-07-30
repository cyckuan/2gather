import React from 'react'
import {StyleSheet, View} from 'react-native'
import {NativeRouter, Route, Switch} from 'react-router-native'
import {Font} from 'expo'

import HomeScreen from './screens/HomeScreen'
import GraphScreen from './screens/GraphScreen'

export default class App extends React.Component {
  async componentWillMount () {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
  }

  render () {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/:id' component={GraphScreen} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  }
})
