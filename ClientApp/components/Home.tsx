import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as GreetingStore from '../store/Greeting';
import ToggledGreeter from '../containers/ToggledGreeter';
import ModalLauncher from './modal/ModalLauncher';

// type Props =
//     { greeter: GreetingStore.IGreetingState }
//     & { greetingActions: typeof GreetingStore.actionCreators }
//     & RouteComponentProps<{}>;

// class Home extends React.Component<Props, {}> {
const Home: React.SFC<{}> = () => {
    const handleSubmit = () => {
        console.log("Clicked")
    }

    // const { greeter, greetingActions } = this.props;
    return <div>
        <h1>Hello!</h1>
        <ModalLauncher buttonLabel="Open modal">
            <h4>Some header</h4>
            <p>Some text in the Modal..</p>
            {/* <button type="button" className="btn btn-primary" onClick={handleSubmit}>Child reporting!</button> */}
        </ModalLauncher>

        {/* <FlatGreeter /> */}
        {/* <ToggledGreeter /> */}

        {/* <p>{greeter.greeting}</p>
            <button onClick={() => greetingActions.toggleGreeting()}>Toggle</button> */}
    </div>;
}
export default Home;
// }

// export const mapStateToProps = (state: ApplicationState) => {
//     return {
//         greeter: state.greeter
//     };
// };
// export const mapStateToProps = (state: ApplicationState) => {
//     const { greeter } = state;
//     return { greeter };
// };

// export const mapDispatchToProps = (dispatch: any) => {
//     const greetingActions = {
//         toggleGreeting: () => dispatch(GreetingStore.actionCreators.toggleGreeting())
//     }
//     return { greetingActions };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Home);