import React from 'react'
import PropTypes from 'prop-types'
import {Text, StyleSheet, View} from 'react-native'
import PercentageCircle from 'react-native-percentage-circle'
import {Icon} from 'native-base'

export default class CircleButton extends React.Component {
  render () {
    const {radius, percent, color, icon, showText, style} = this.props
    return (
      <View style={[style, styles.defaultStyle]}>
        <PercentageCircle
          style={styles.textCenter}
          radius={radius}
          percent={percent}
          color={color}
        >
          {icon ? <Icon name={icon} /> : null}
          {showText ? <Text adjustFontSizeToFit>{`${percent}%`}</Text> : null}
        </PercentageCircle>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(96, 177,88, 1)',
    color: 'rgba(255,255, 255, 1.0)'
  },
  defaultStyle: {
    flex: 1
  }
})

const {number, string, func, oneOfType, object, array, any} = PropTypes

CircleButton.propTypes = {
  radius: number,
  percent: number,
  color: string,
  icon: string,
  onPress: func,
  style: any
}
