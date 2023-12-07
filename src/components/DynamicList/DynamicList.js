import './DynamicList.module.scss';

import React from 'react';

// eslint-disable-next-line react/prop-types
export function DisplayDynamicList({ n }) {
    function generateListItems () {
      const listItems = [];
      for (var i = 1; i <= n; i++) {
        listItems.push(<li>List element {i}</li>);
      }
      return listItems;
    }
  
    return (
     <> <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
        <ul>{generateListItems()}</ul>
      </div><hr></hr></>
    );
  }
  