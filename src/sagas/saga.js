import { actionChannel, call, take, put, race } from 'redux-saga/effects';
import * as actions from '../actions';

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

function* runTimer() {
    const channel = yield actionChannel('START');

    while (yield take(channel)) {
        while(true) {
            const winner = yield race({
                stopped: take('STOP'),
                tick: call(delay, 1000)
            });

            if (!winner.stopped) {
                yield put(actions.tick())
            } else {
                break
            }
        }
    }
}
export default runTimer