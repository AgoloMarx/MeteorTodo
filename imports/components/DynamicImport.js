// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class DynamicImport extends Component {
//   static propTypes = {
//     load: PropTypes.func,
//     children: PropTypes.func,
//   }
//   state = {
//     component: null,
//   }
//   componentDidMount() {
//     this.props.load().then((component) => {
//       this.setState(() => ({
//         component: component.default ? component.default : component,
//       }));
//     });
//   }
//   render() {
//     return this.props.children(this.state.component);
//   }
// }

// export default DynamicImport;

import React from 'react';
import Loadable from 'react-loadable';
import LoadableLoading from './LoadableLoading';

const loading = ({ }) => {
  return (
    <div>
      Loading!
    </div>
  )
}

const DynamicImport = (opts) => (
  Loadable({
    loading: LoadableLoading,
    ...opts,
  })
);

export default DynamicImport;
