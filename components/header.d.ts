import * as React from 'react';
export interface MyStatusBarProps {
    backgroundColor: any;
    barStyle: any;
}
export interface HeaderProps {
    statusBarStyle: object;
    navigationBarStyle: object;
    componentLeft: any;
    componentCenter: any;
    componentRight: any;
}
export interface HeaderState {
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    static defaultProps: Partial<HeaderProps>;
    constructor(props: HeaderProps);
    render(): JSX.Element;
}
