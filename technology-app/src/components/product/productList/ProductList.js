import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import ProductItem from "../productItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredProducts,
  SORT_PRODUCTS,
} from "../../../redux/slice/filterSlice";
import Pagination from "../../pagination/Pagination";

const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);

  const [sort, setSort] = useState("latest");
  const filteredProducts = useSelector(selectFilteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, products, sort]);

  return (
    <div className={styles["product-list"]} id="product">
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill
            size={22}
            color="orangered"
            onClick={() => setGrid(true)}
          />

          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />

          <p>
            <b>{filteredProducts.length}</b> Sản phẩm được tìm thấy.
          </p>
        </div>
        <div className={styles.sort}>
          <label>Sắp xếp theo:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Mới nhất</option>
            <option value="lowest-price">Giá thấp nhất</option>
            <option value="highest-price">Giá Cao Nhất</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      </div>

      <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        {products.lenght === 0 ? (
          <p>Không tìm thấy sản phẩm!</p>
        ) : (
          <>
            {currentProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} grid={grid} product={product} />
                </div>
              );
            })}
          </>
        )}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        />
      </div>
    </div>
  );
};

export default ProductList;
