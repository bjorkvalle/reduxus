import * as React from 'react';
import * as GreetingStore from '../store/Greeting';

type Props =
    { greeter: GreetingStore.IGreetingState }
    & { greetingActions: typeof GreetingStore.actionCreators };

const Greeting: React.SFC<Props> = ({ greeter, greetingActions }) => (
    <div>
        <p>{greeter.greeting}</p>
        <button onClick={() => greetingActions.toggleGreeting()}>Toggle</button>
    </div>
);
export default Greeting;
// type Props = {
//     toggleGreeting: any,
//     greeting: string
// }

// const Greeting = (props: any) => (
//     <div>
//         <p>{props.greeter.greeting}</p>
//         <button onClick={() => props.greetingActions.toggleGreeting()}>Toggle</button>
//     </div>
// )
// export default Greeting;


// // const Greeting: React.SFC<Props> = ({ toggleGreeting, greeting }) => (