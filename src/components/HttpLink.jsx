import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import BaseLink from './BaseLink.jsx';

// HTTP Link
class HttpLink extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render(){
    return <BaseLink {...this.props} linkType={this.props.isHttps ? 'https://' : 'http://'} />;
  }
}

HttpLink.propTypes = {
  isHttps: React.PropTypes.bool
};

HttpLink.defaultProps = {
  isHttps: false
};

export default HttpLink;
