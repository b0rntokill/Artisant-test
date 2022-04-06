import React from "react";
import { IMAGE_URL } from "../../../const";
import placeholder from "../../../images/placeholder.jpg";
import styles from "./custom-image.module.scss";

const IMAGE_TYPE_REGEX = /.+(.webp)$/;

type CustomImageProps = {
  image: string | undefined;
  name: string;
};

function CustomImage({ image, name }: CustomImageProps): JSX.Element {
  let isImage;

  if (image) {
    isImage = IMAGE_TYPE_REGEX.test(image);
  }

  return (
    <img
      className={styles.img}
      src={`${isImage ? `${IMAGE_URL}${image}` : `${placeholder}`}`}
      alt={name}
    />
  );
}

export default CustomImage;
