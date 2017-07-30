import React from 'react'
import {WebView, StyleSheet} from 'react-native'

export default class GraphScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let source = {}
    console.log('ID in GRAPH SCREEN', id)
    switch (id) {
      case 'air-quality':
        source = {
          uri: 'https://2gather.shinyapps.io/weather/'
        }
        break
      case 'map':
        source = {
          uri: 'https://public.tableau.com/profile/steve.nouri#!/vizhome/shared/X5QYND85Q'
        }
        break
      case 'congestion':
        source = {
          uri: 'https://2gather.shinyapps.io/congestion/'
        }
        break
      case 'disease':
        source = {
          uri: 'https://2gather.shinyapps.io/disease/'
        }
        break
    }

    return <WebView source={source} />
  }
}

const styles = StyleSheet.create({
  web: {
    marginTop: 5
  }
})
