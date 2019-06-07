import React from 'react';
import Tab from './Tab';
const Tabs = props => {
    const {selectedTab, selectedTabHandler, tabs} = props;
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {tabs.map((tab, i) => <Tab tab={tab} selectedTab={selectedTab} selectedTabHandler={selectedTabHandler} key={i} />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
