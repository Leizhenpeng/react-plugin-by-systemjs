import React from 'react';
import ReactDOM from 'react-dom';

const GoodBye = () => <h1>GoodBye from Plugin</h1>;

export default GoodBye;

ReactDOM.render(<GoodBye />, document.getElementById('plugin'));
