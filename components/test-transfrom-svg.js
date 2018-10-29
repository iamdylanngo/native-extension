"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_svg_1 = require("react-native-svg");
class SVGTranformComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let trans = { translate: `'${50}, ${50}'`, rotate: `${20}`, scale: `${1}` };
        return (<react_native_1.View style={styles.container}>
         <react_native_1.Text>CircularSlider Component</react_native_1.Text>
          <react_native_svg_1.default width={250} height={250}>
            
            

            <react_native_svg_1.G transform='rotate(45, 105, 32.5) translate(50 50) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
              <react_native_svg_1.Path d='M0 225 l0 -225 1300 0 1300 0 0 225 0 225 -1300 0 -1300 0 0 -225z'/>
            </react_native_svg_1.G>

          </react_native_svg_1.default>
      </react_native_1.View>);
    }
}
exports.default = SVGTranformComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
