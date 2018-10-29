"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_svg_1 = require("react-native-svg");
const defaultProps = {
    xCenter: react_native_1.Dimensions.get('window').width / 2,
    yCenter: react_native_1.Dimensions.get('window').height / 2,
};
class CircularSliderComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        // let width = (this.props.dialRadius * this.props.btnRadius) * 2;
        let width = 500;
        let DR = this.props.dialRadius;
        return (<react_native_1.View style={styles.container}>
         <react_native_1.Text>CircularSlider Component</react_native_1.Text>
          <react_native_svg_1.default width={width} height={width}>
            <react_native_svg_1.Circle cx={width / 2} cy={width / 2} r={DR} stroke='green' strokeWidth='5' fill='yellow'></react_native_svg_1.Circle>
            <react_native_svg_1.Path stroke='red' strokeWidth='5' fill='none' d='M100,50 C140,150  130,150, 250,60'></react_native_svg_1.Path>
          </react_native_svg_1.default>
      </react_native_1.View>);
    }
}
CircularSliderComponent.defaultProps = defaultProps;
exports.default = CircularSliderComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
