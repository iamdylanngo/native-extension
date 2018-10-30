# [Native Extension](https://github.com/jundat95/native-extension.git)  &middot;  [![Build status](https://ci.appveyor.com/api/projects/status/otl3ny8v3lvm3je5?svg=true)](https://ci.appveyor.com/project/jundat95/native-extension)  [![npm version](https://badge.fury.io/js/native-extension.svg)](https://badge.fury.io/js/native-extension)  [![GitHub license](https://img.shields.io/github/license/jundat95/native-extension.svg)](https://github.com/jundat95/native-extension/blob/master/LICENSE)  [![npm downloads](https://img.shields.io/npm/dt/native-extension.svg)](https://npm-stat.com/charts.html?package=native-extension&from=2018-10-29&to=2018-11-30)  


NativeExtension is open source framework. Essential cross-platform UI components for React Native

*Here is direct link to npm package* [link](https://www.npmjs.com/package/native-extension)

*Here is direct link to yarn package* [link](https://yarnpkg.com/en/package/native-extension)

*Here is direct link to github* [link](https://www.npmjs.com/package/native-extension)

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

const ComponentLeft = () =>
    <View style={{ flex: 1, alignItems: 'flex-start' }} >
        <Image
            source={require('../../assets/images/ic_search.png')}
            style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 10, alignSelf: 'flex-start' }}
        />
    </View>;


const ComponentCenter = () =>
    <View style={{ flex: 1 }}>
        <Image
            source={require('../../assets/images/ic_google.png')}
            style={{ resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
        />
    </View>;

const ComponentRight = () =>
    <View style={{ flex: 1 }}>
        <Image
            source={require('../../assets/images/ic_profile.png')}
            style={{ resizeMode: 'contain', width: 35, height: 35, marginRight: 10, alignSelf: 'flex-end' }}
        />
    </View>;
 
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
          componentLeft     = { ComponentLeft   }
          componentCenter   = { ComponentCenter }
          componentRight    = { ComponentRight  }
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
