import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';
import { randomizedGreeting } from '../utils/StringGenerator';

// action type keys
export enum GreetingActionTypeKeys {
    TOGGLE = 'GREETING_TOGGLE'
}

// state
export interface IGreetingState {
    greeting: string;
}

// actions
export interface IToggleGreetingAction {
    type: GreetingActionTypeKeys.TOGGLE;
    greeting: string;
}

type KnownAction = IToggleGreetingAction;

// action creators - exposes actions to the ui
export const actionCreators = {
    toggleGreeting: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // dispatch greeting
        dispatch(<IToggleGreetingAction>{ type: GreetingActionTypeKeys.TOGGLE, greeting: randomizedGreeting() });
    }
}

// reducers
const unloadedState: IGreetingState = {
    greeting: "Hello"
}

export const reducer: Reducer<IGreetingState> = (state: IGreetingState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;

    switch (action.type) {
        case GreetingActionTypeKeys.TOGGLE:
            return <IToggleGreetingAction>{
                ...state,
                greeting: action.greeting
            }
        default:
            return state || unloadedState;
    }
}

// selectors are functions that take Redux state as an argument and return some data to pass to the component.
// Containers read a store’s data through selectors. Selectors are your “reading API” and should be co-located with their reducers
export const getGreeting = (id: number) => (state: any) => {
    return state.greetings[id];
}