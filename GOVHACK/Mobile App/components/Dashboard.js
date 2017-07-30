import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet} from 'react-native'
import {Link} from 'react-router-native'
import CircleButton from './CircleButton'
import GraphScreen from '../screens/GraphScreen'
import v4 from 'uuid/v4'

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.renderItems = this.renderItems.bind(this)
  }

  renderItems () {
    return this.props.data.map(indicator => {
      const {radius, percent, color, icon, style, link, id} = indicator
      const key = v4()
      return (
        <Link to={`/${id}`} key={key}>
          <CircleButton
            radius={radius}
            percent={percent}
            color={color}
            icon={icon}
            style={style}
          />
        </Link>
      )
    })
  }

  render () {
    return (
      <View style={[styles.dashboard, styles.container]}>
        {this.renderItems()}
      </View>
    )
  }
}

const {arrayOf, shape} = PropTypes

Dashboard.propTypes = {
  data: arrayOf(shape(CircleButton.propTypes))
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  dashboard: {
    flex: 1,
    height: 250,
    backgroundColor: 'rgba(96, 177,88, 1)'
  }
})
