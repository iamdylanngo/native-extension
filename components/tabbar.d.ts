import * as React from 'react';
export interface TabbarProps {
    titles: string[];
    onChanged: any;
}
export interface TabbarState {
}
export default class Tabbar extends React.Component<TabbarProps, TabbarState> {
    static defaultProps: {
        titles: never[];
        onChanged: () => void;
    };
    constructor(props: TabbarProps);
    render(): JSX.Element;
}
