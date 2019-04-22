import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Timer } from '../components/Timer';
import * as actions from '../actions';
import { getFormattedTime, getStatus } from '../redusers/reduser';

export const View = connect(
    state => ({
        time: getFormattedTime(state),
        status: getStatus(state),
    }),
    actions
)(Timer);