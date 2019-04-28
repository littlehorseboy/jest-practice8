import React from 'react';

function Title() {
  return <p>計數器</p>;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'horse',
    };
  }

  render() {
    return (
      <div>
        <Title />

        姓名
        <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        <br />
        <span>{this.state.name}點了{this.state.count}下</span>
        <br />
        <button onClick={() => { this.setState({ count: this.state.count + 1 }); }}>
          點我加1
        </button>
      </div>
    );
  }
}

export default Counter;
