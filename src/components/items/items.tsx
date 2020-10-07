import React from 'react';

import AllItems from './allItems/allItems';
import SearchItems from './searchItems/searchItems';

interface productsData {
  products: productData[];
}

interface productData {
  id: string;
  name: string;
  type: string;
  price: number;
  img: string;
}

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
