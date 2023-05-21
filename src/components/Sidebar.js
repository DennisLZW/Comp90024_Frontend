// Sidebar.js

import React from 'react';
import LineChart from './Linechart';

function Sidebar({ data, onClose }) {
  return (
    <div className="sidebar">
      <button onClick={onClose}>Close</button>
      {data && <LineChart data={data} />}
    </div>
  );
}

export default Sidebar;
