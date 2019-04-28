import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCounter } from '../../actions/Counter/counter';

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>點了{this.props.count}下</span>
        <br />
        <button onClick={this.props.addCount}>
          點我加1
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  addCount: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.reducer.count,
});

const mapDispatchToProps = dispatch => ({
  addCount: () => dispatch(addCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
