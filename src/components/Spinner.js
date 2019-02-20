import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {message: ''}
  }

  componentDidMount() {
    this.setState({message: this.props.message ? this.props.message : 'Loading...'})
  }

  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default Spinner;