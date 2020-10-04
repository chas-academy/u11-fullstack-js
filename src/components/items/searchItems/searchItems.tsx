import React from 'react';
import { useQuery } from 'react-apollo';
import styles from '../items.module.css';

import Item from '../item/item';
import { searchProductsQuery } from '../../..//queries/product-queries';

interface productsData {
  searchProducts: productData[];
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

const SearchItems = (props: searchVariables) => {
  const { loading, data } = useQuery<productsData, searchVariables>(searchProductsQuery, {
    variables: {
      searchTerm: props.searchTerm,
    },
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Found {data?.searchProducts.length} items on "{props.searchTerm}"
      </h3>
      <div className={styles.itemContainer}>
        {loading ? (
          <div>Loading products...</div>
        ) : (
          data?.searchProducts.map((item) => {
            return <Item item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchItems;
