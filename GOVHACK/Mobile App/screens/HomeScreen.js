import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Button
} from 'native-base'
import {Route, withRouter, Link} from 'react-router-native'
import Tabs from 'react-native-tabs'
import {Constants} from 'expo'

import Dashboard from '../components/Dashboard'
import CompareScreen from './CompareScreen'
import OverviewScreen from './OverviewScreen'
import UpdateScreen from './UpdateScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'green',
    height: 1000,
    marginTop: 65,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: 'hotpink',
    paddingVertical: 65
  },
  headerIcons: {
    color: 'green'
  },
  dashboardContainer: {
    height: 500,
    flex: 1
  },
  item: {
    marginRight: 25
  },
  tabs: {
    backgroundColor: 'white',
    height: 60
  },
  selectedTab: {
    color: 'red'
  },
  tabContainer: {
    borderRightWidth: 1,
    borderRightColor: 'blue',
    borderStyle: 'solid',
    padding: 15
  },
  navbar: {
    position: 'absolute',
    paddingTop: Constants.statusBarHeight,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#050B7A'
  }
})

const data = [
  {
    style: styles.item,
    radius: 35,
    percent: 24,
    id: 'disease',
    color: '#B6B445',
    icon: 'md-expand',
    showText: false
  },
  {
    style: styles.item,
    radius: 35,
    percent: 78,
    id: 'air-quality',
    color: '#B6B445',
    icon: 'md-flame',
    showText: false
  },
  {
    style: styles.item,
    radius: 35,
    percent: 46,
    id: 'congestion',
    color: '#B6B445',
    icon: 'md-outlet',
    showText: false
  },
  {
    style: styles.item,
    radius: 35,
    percent: 0,
    id: 'map',
    color: '#B6B445',
    icon: 'md-map',
    showText: false
  }
]

export class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'overview'
    }
    this.renderTab = this.renderTab.bind(this)
    this.onTabSelected = this.onTabSelected.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }

  renderTab (match) {
    console.log('Inside renderTab')
    const {params} = match
    if (params) {
      const {tab} = params
      console.log('TAB', tab)
      switch (tab) {
        case 'overview':
          return <OverviewScreen />
        case 'compare':
          return <CompareScreen />
        case 'update':
          return <UpdateScreen />
        default:
          return <Dashboard data={data} />
      }
    }
    return <Dashboard data={data} />
  }

  onTabSelected (el) {
    const {name} = el.props
    const {history} = this.props
    this.setState({
      active: name
    })
    history.push(`/home/${name}`)
  }

  onMapClick () {
    console.log('The map is being loaded anytime')
    this.props.history.push('/graphs/map')
  }

  render () {
    return (
      <Container>
        <Header
          style={styles.navbar}
          iosBarStyle='light-content'
          androidBarStyle='light-content'
        >
          <Left>
            <Icon name='md-ionitron' style={styles.headerIcons} />
          </Left>
          <Body><Text style={{color: 'white'}}>2 gather</Text></Body>
          <Right>
            <Button
              onPress={() => {
                console.log('Inside button onPress')
                console.log(this.onMapClick)
                this.onMapClick()
              }}
              transparent
            >
              <Icon name='md-map' style={styles.headerIcons} />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.dashboardContainer} />
          <View style={styles.routeContainer}>
            <Route to='/:tab' render={this.renderTab} />
          </View>
          <Tabs
            selected={this.state.active}
            style={styles.tabs}
            onSelect={this.onTabSelected}
          >
            <View style={styles.tabContainer} name='compare'>
              <Text>Compare</Text>
            </View>
            <View style={styles.tabContainer} name='overview'>
              <Text>Overview</Text>
            </View>
            <View name='update'>
              <Text>Update</Text>
            </View>
          </Tabs>
        </Content>
      </Container>
    )
  }
}

const HomeScreenContainer = withRouter(HomeScreen)
export default HomeScreenContainer
