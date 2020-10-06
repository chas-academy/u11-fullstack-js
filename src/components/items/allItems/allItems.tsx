import React from 'react';
import { useQuery } from 'react-apollo';
import styles from '../items.module.css';

import Item from '../item/item';
import { getAllProductsQuery } from '../../..//queries/product-queries';

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

const AllItems = () => {
  const { loading, data } = useQuery<productsData>(getAllProductsQuery);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Showing top items</h3>
      <div className={styles.itemContainer}>
        {loading ? (
          <div>Loading products...</div>
        ) : (
          data?.products.map((item) => {
            return <Item item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default AllItems;