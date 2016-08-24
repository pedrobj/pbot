import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Avatar from '../components/Avatar'

class ProfileContainer extends Component {
  render() {
    const { user } = this.props
    return (
      <Avatar key={user.id} profile={user} />
    )
  }
}

function mapStateToProps(state) {
  return {user}
}

export default connect(mapStateToProps)(ProfileContainer)