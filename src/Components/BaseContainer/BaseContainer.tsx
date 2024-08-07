import React, {Component} from "react";

interface BaseContainerProps {
    children: React.ReactNode; 
  }

// General component for the main container
class BaseContainer extends Component<BaseContainerProps> {

    render(){
        const {children} = this.props;

        return <div className="base-container">{children}</div>
    }

}

export default BaseContainer