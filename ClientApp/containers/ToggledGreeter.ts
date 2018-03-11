import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as GreetingStore from '../store/Greeting';
import Greeting from '../components/Greeting';

// type Props =
//     { greeter: GreetingStore.IGreetingState }
//     & { greetingActions: typeof GreetingStore.actionCreators };

export const mapStateToProps = (state: ApplicationState) => {
    const { greeter } = state;
    return { greeter };
};

export const mapDispatchToProps = (dispatch: any) => {
    const greetingActions = {
        toggleGreeting: () => dispatch(GreetingStore.actionCreators.toggleGreeting())
    }
    return { greetingActions };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);

// export default ToggledGreeter;
// const ToggledGreeter = () => {

// }