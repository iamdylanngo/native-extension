import * as React from 'react';
import { Animated } from 'react-native';
export interface TransfromProps {
}
export interface TransfromState {
    valueAnimation: Animated.Value;
}
export default class TransfromComponent extends React.Component<TransfromProps, TransfromState> {
    constructor(props: TransfromProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
