import React from 'react';

const Stats = (props) => (
<div className="stats">
    <h2>{props.name}</h2>
    <h2>{props.sum}</h2>
</div>
)

export default Stats;
