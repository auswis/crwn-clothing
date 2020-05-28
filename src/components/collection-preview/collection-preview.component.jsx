import React from "react";

import {
  CollectionPreviewContainer,
  title,
  preview,
} from "./collection-preview.styles.jsx";

import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <title>{title.toUpperCase()}</title>
    <preview>
      {items
        .filter((items, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
