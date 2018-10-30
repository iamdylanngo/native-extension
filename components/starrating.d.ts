import * as React from 'react';
import { Animated } from 'react-native';
export interface StarRatingProps {
    max: number;
    initial: number;
    onChange: any;
    config: {
        easing: any;
        duration: any;
    };
    editable: boolean;
    stagger: number;
    maxScale: number;
    starStyle: any;
    containerStyle: any;
    selectedStar: any;
    unselectedStar: any;
    onAnimationComplete: any;
}
export interface StarRatingState {
    selected: number;
}
export default class StarRating extends React.PureComponent<StarRatingProps, StarRatingState> {
    static defaultProps: Partial<StarRatingProps>;
    constructor(props: StarRatingProps);
    animatedValues: Animated.Value[];
    getSelectedOpacity: (index: number) => Animated.AnimatedInterpolation;
    getUnselectedOpacity: (index: number) => Animated.AnimatedInterpolation;
    getScale: (index: number) => Animated.AnimatedInterpolation;
    animate: (curr: number) => () => void;
    renderStar: (value: any, index: number) => JSX.Element;
    render(): JSX.Element;
}
