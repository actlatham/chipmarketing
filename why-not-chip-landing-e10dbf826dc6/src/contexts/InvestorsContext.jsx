import * as React from 'react';
import PropTypes from 'prop-types';

const INVESTORS_ADD_TIMEOUT = Number.parseInt(process.env.INVESTORS_ADD_TIMEOUT);
const INVESTORS_COUNT = Number.parseInt(process.env.INVESTORS_COUNT);
const INVESTORS_MAX = Number.parseInt(process.env.INVESTORS_MAX);

export const InvestorsContext = React.createContext();

export default class InvestorsProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  state = {
    count: 0,
    percent: 0,
  };

  timeout = null;

  componentDidMount() {
    this.setState(this.getNewState(INVESTORS_COUNT), () => {
      this.incrementInvestors();
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getPercent(count) {
    let value = Math.round(count / INVESTORS_MAX * 100);
    value = Math.min(value, 100);
    value = Math.max(value, 0);
    return value;
  }

  getNewState(count) {
    return {
      count,
      percent: this.getPercent(count),
    };
  }

  incrementInvestors() {
    this.timeout = setTimeout(() => {
      this.setState(({ count }) => this.getNewState(count + 1), () => this.incrementInvestors());
    }, INVESTORS_ADD_TIMEOUT * 1000);
  }

  render() {
    return (
      <InvestorsContext.Provider value={this.state}>
        {this.props.children}
      </InvestorsContext.Provider>
    );
  }
}
