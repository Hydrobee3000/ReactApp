import { connect } from 'react-redux'
import Users from './Users'
import { MapStateToProps } from 'react-redux'
import { MapDispatchToProps } from 'react-redux'

export default connect(MapStateToProps, MapDispatchToProps)(Users)
