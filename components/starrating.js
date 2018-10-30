"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
    imageContainer: Object.assign({}, react_native_1.StyleSheet.absoluteFillObject),
});
const initializeAnimatedValues = (max, initial) => Array(max)
    .fill(null)
    .map((value, index) => new react_native_1.Animated.Value(index + 1 <= initial ? 1 : 0));
const createAnimations = (config, values, prev, curr) => {
    if (curr > prev) {
        const startIndex = prev === 0 ? 0 : prev - 1;
        return values.slice(startIndex, curr).map((value) => react_native_1.Animated.timing(value, Object.assign({}, config, { toValue: 1, useNativeDriver: true })));
    }
    return values
        .slice(curr, prev)
        .map((value) => react_native_1.Animated.timing(value, Object.assign({}, config, { toValue: 0, useNativeDriver: true })))
        .reverse();
};
class StarRating extends React.PureComponent {
    constructor(props) {
        super(props);
        this.animatedValues = initializeAnimatedValues(this.props.max, this.props.initial);
        this.getSelectedOpacity = (index) => this.animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        this.getUnselectedOpacity = (index) => this.animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        this.getScale = (index) => this.animatedValues[index].interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, this.props.maxScale, 1],
            extrapolate: 'clamp',
        });
        this.animate = (curr) => () => {
            const { config, stagger, onChange, onAnimationComplete } = this.props;
            const animations = createAnimations(config, this.animatedValues, this.state.selected, curr);
            this.setState(() => ({
                selected: curr,
            }), () => {
                onChange(this.state.selected);
                react_native_1.Animated.stagger(stagger, animations).start(() => onAnimationComplete(this.state.selected));
            });
        };
        this.renderStar = (value, index) => (<react_native_1.View key={index}>
      {<react_native_1.TouchableWithoutFeedback disabled={!this.props.editable} onPress={this.animate(index + 1)}>
          <react_native_1.View style={this.props.starStyle}>
            <react_native_1.View style={styles.imageContainer}>
              <react_native_1.Animated.Image style={[
            styles.image,
            {
                opacity: this.getUnselectedOpacity(index),
                transform: [{ scale: this.getScale(index) }],
            },
        ]} source={this.props.unselectedStar}/>
            </react_native_1.View>
            <react_native_1.View style={styles.imageContainer}>
              <react_native_1.Animated.Image style={[
            styles.image,
            {
                opacity: this.getSelectedOpacity(index),
                transform: [{ scale: this.getScale(index) }],
            },
        ]} source={this.props.selectedStar}/>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.TouchableWithoutFeedback>}
    </react_native_1.View>);
        this.state = {
            selected: props.initial,
        };
    }
    render() {
        return <react_native_1.View style={this.props.containerStyle}>{this.animatedValues.map(this.renderStar)}</react_native_1.View>;
    }
}
StarRating.defaultProps = {
    max: 5,
    initial: 0,
    onChange: () => { },
    config: {
        easing: react_native_1.Easing.elastic(1),
        duration: 400,
    },
    stagger: 100,
    maxScale: 1.1,
    starStyle: {
        width: 36,
        height: 36,
    },
    editable: true,
    containerStyle: { flexDirection: 'row' },
    onAnimationComplete: () => { },
};
exports.default = StarRating;
