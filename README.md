# [Native-Extension](https://github.com/jundat95/rn-redux-cli.git) &middot; [![Build status](https://ci.appveyor.com/api/projects/status/b5kayplxp97i2nq6?svg=true)](https://ci.appveyor.com/project/jundat95/rn-redux-cli) [![npm version](https://badge.fury.io/js/rn-redux.svg)](https://badge.fury.io/js/rn-redux) [![Rn-Redux Welcome](https://img.shields.io/badge/Jundat95-RNRedux-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

NativeExtension is open source framework. Essential cross-platform UI components for React Native


# Components

1. [Header](#1-header)
2. [Switch](#2-switch)

# Getting Started

**Setup with React Native app**

*Install NativeExtension*

```bash
npm install native-extension --save
```

# Compatibility Versions

|     NativeExtension      |      React Native        |
|--------------------------|--------------------------|
| v0.0.1   |   v0.57    |


# Using

## 1. Header

```javascript
import { Header } from 'native-extension';

const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Image 
          source={require('./img/ic_back.png')}
          style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
        />
        <Text style={{ color: 'white', }}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const ComponentCenter = () => {
  return(
    <View style={{ flex: 1, }}>
       <Image
        source={require('./img/ic_logo.png')}
        style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
      />
    </View>
  );
};
 
const ComponentRight = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end', }}>
      <TouchableOpacity>
        <Text style={{ color: 'white', }}> Right </Text>
      </TouchableOpacity>
    </View>
  );
};
 
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
          componentLeft     = { () =>  <ComponentLeft />   }
          componentCenter   = { () =>  <ComponentCenter /> }
          componentRight    = { () =>  <ComponentRight />  }
          navigationBarStyle= {{ backgroundColor: '#215e79' }}
          statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
      </View>
    );
  }
}

```


## 2. Switch

```javascript
import { Switch } from 'native-extension';

<Switch
    height={40}
    width={300}
    activeText={`Active Text`}
    inActiveText={`InActive Text`}
    onValueChange={(value: any) => console.log(value)}
/>

```