import * as React from 'react';
export interface CircularSliderProps {
    dialRadius: number;
    btnRadius: number;
    startAngel: number;
    endAngel: number;
    xCenter?: number;
    yCenter?: number;
}
export interface CircularSliderState {
}
export default class CircularSliderComponent extends React.PureComponent<CircularSliderProps, CircularSliderState> {
    static defaultProps: {
        xCenter: number;
        yCenter: number;
    };
    constructor(props: CircularSliderProps);
    render(): JSX.Element;
}
