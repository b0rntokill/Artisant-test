import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card";
import { CustomButton } from "../../components/common/custom-button";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";
import { SortType } from "../../const";
import {
  fetchProductsAction,
  getIsLoading,
  getProducts,
  getSortType,
  setSortType,
} from "../../store/app-data";
import styles from "./products.module.scss";
import { sortProducts } from "./utils";

function Products(): JSX.Element {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoading);
  const sortType = useSelector(getSortType);
  const sortedProducts = React.useMemo(
    () => sortProducts(products, sortType),
    [products, sortType]
  );

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const onButtonClick = () => {
    if (sortType !== SortType.Quantity) {
      dispatch(setSortType(SortType.Quantity));
    } else {
      dispatch(setSortType(SortType.Popular));
    }
  };

  return (
    <section className={`${styles.products} container`}>
      <h2>Explore</h2>
      <p className={styles.text}>Buy and sell digital fashion NFT art</p>
      {/* Не изящно, но для наглядности */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CustomButton text={sortType} type="button" onClick={onButtonClick} />
          <div className={styles.cardsWrapper}>
            {sortedProducts.map((product) => (
              <div className={styles.cardWrapper} key={product.productId}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Products;
