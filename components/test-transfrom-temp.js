"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class TransfromComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueAnimation: new react_native_1.Animated.Value(0),
        };
    }
    componentDidMount() {
        react_native_1.Animated.timing(this.state.valueAnimation, {
            toValue: 1,
            duration: 4000,
            delay: 100,
            easing: react_native_1.Easing.linear,
        }).start();
    }
    render() {
        let angle = this.state.valueAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        let angel = -10;
        let d = 1;
        let deltaX = -d * Math.cos(Math.PI * angel / 180);
        let deltaY = -d * Math.sin(Math.PI * angel / 180);
        return (<react_native_1.View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
         <react_native_1.Image style={{
            position: 'absolute',
            width: 200,
            height: 50,
            resizeMode: 'stretch',
            tintColor: 'red',
            transform: [
                { translateY: -100 },
                { rotate: 90 + 'deg' },
            ],
        }} source={require('../../img/thumb.png')}/>
         <react_native_1.Animated.Image style={{
            position: 'absolute',
            width: 200,
            height: 50,
            resizeMode: 'stretch',
            transform: [
                {
                    translateX: 0,
                },
                {
                    translateY: 0,
                },
                { rotate: angle },
            ],
        }} source={require('../../img/thumb.png')}/>
      </react_native_1.View>);
    }
}
exports.default = TransfromComponent;
