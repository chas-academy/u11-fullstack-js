import React from 'react';

import AllItems from './allItems/allItems';
import SearchItems from './searchItems/searchItems';

interface searchVariables {
  searchTerm: string;
}

export default function Items(props: searchVariables) {
  if (props.searchTerm !== '') {
    return <SearchItems searchTerm={props.searchTerm} />;
  } else {
    return <AllItems />;
  }
}
