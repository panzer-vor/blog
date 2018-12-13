import * as React from "react"

interface IAsyncComponentState{
  Component: any
}
export default function asyncComponent(getComponent: any): any  {
  class AsyncComponent extends React.Component<{}, IAsyncComponentState> {
    constructor(props: any) {
      super(props)
      this.state = {
          Component: null
      }
    }
    public async componentDidMount(){
      const {default: Component} = await getComponent();
      this.setState({
          Component,
      });
    }
    public render() {
        const C = this.state.Component;
        return C && <C {...this.props}/> 
    }
  }
  return AsyncComponent
}