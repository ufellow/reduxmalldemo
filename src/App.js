import React , { Fragment } from 'react';
class App extends React.Component {

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}

export default App;