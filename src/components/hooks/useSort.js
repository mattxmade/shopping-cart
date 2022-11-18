import { useState } from "react";

import ProductSort from "../../data/product.sort";
import LocalStorage from "../../data/LocalStorage.module";

const useSort = () => {
  const [sortBy, setSortBy] = useState(LocalStorage.get("sort") ?? "name: a-z");

  const handleSortBy = (method, array) => {
    if (method === sortBy) return;

    const arrayToSort = array?.map((product) => product);

    setSortBy(method);
    LocalStorage.set("sort", method);

    return ProductSort(method, arrayToSort);
  };

  return { sortBy, handleSortBy };
};

export default useSort;