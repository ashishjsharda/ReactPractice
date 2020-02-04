import React, { Component } from 'react';
class ComponentApp extends Component {
    state = {
        count:10
      }
    render() { 
        return (  
            <div>
                <h1>
                    This is coming from Component
                </h1>
                <h2>
                    Count seen is {this.state.count}
                </h2>
            </div>
        );
    }
}
 
export default ComponentApp ;