"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Tabbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_native_1.View style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
        <react_native_1.View style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#323B45',
            opacity: 0.08,
            zIndex: 0,
        }}/>
         {this.props.titles.map((item, index) => (<react_native_1.TouchableOpacity key={index} onPress={() => {
            this.props.onChanged(index);
        }} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
        }}>
                <react_native_1.View style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 5,
            backgroundColor: 'blue',
        }}/>
               <react_native_1.Text>{item}</react_native_1.Text>
             </react_native_1.TouchableOpacity>))}
      </react_native_1.View>);
    }
}
Tabbar.defaultProps = {
    titles: [],
    onChanged: () => { },
};
exports.default = Tabbar;
