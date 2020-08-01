import React from 'react';

const NetworkLegend = () => (
  <p className="display__legend network__legend">
    Network view of viral proteins with their (at most) top twenty-five proximity interactions.
    Viral proteins are in
    {' '}
    <span className="network__legend_purple">purple</span>
    {' '}
    and previoulsy reported interactions are shown as
    {' '}
    <span className="network__legend_orange">orange</span>
    {' '}
    lines.
  </p>
);

export default NetworkLegend;
