import React from "react";
import { FrontProduct } from "../../types/products";
import { CustomImage } from "../common/custom-image";
import styles from "./card.module.scss";

type CardProps = {
  product: FrontProduct;
};

function Card({ product }: CardProps): JSX.Element {
  const {
    avatar: { compressed: image },
    createdBy: { authorName },
    name: productName,
    quantity,
    quantityAvailable,
    initialPrice,
  } = product;

  return (
    // В действительности на карточке товара всегда будет ссылка (Link) для перехода на полную версию или покупки.
    // Сейчас в разметке нет ее, т.к. явно не было сказано, по нажатию на всю карточку или что-то иное должен быть переход.
    <section className={styles.card}>
      <div className={styles.imgWrapper}>
        <CustomImage image={image} name={productName} />
        <div className={styles.descriptionWrapper}>
          <p className={styles.textWrapper}>
            <span className={styles.created}>created by</span>
            <span className={styles.author}>{authorName}</span>
          </p>
          <p className={styles.itemName}>{productName}</p>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.available}>
          <span className={styles.availableText}>available</span>
          <span className={styles.availableAmount}>
            {quantityAvailable} of {quantity}
          </span>
        </p>
        <p className={styles.price}>
          <span className={styles.priceText}>price</span>
          <span className={styles.priceCost}>{initialPrice} ETH</span>
        </p>
      </div>
    </section>
  );
}

export default Card;
