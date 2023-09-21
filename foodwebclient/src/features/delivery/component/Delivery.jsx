import React, { useEffect, useState } from "react";
import "../../../style/delivery.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRestorantAsync, selectAllRestorants } from "../RestorantSlice";
import { Link, useParams } from "react-router-dom";

import HeaderOption from "../../Navbar/HeaderOption";
import HeaderFilter from "../../Navbar/HeaderFilter";
import RestorantCard from "../../../ui/RestorantCard";
import { MdCancel } from "react-icons/md";

import SliderComponent from "../../../ui/SliderComponent";

const Delivery = () => {
  const restaurantData = useSelector(selectAllRestorants);
  const dispatch = useDispatch();
  console.log(restaurantData);
  useEffect(() => {
    dispatch(fetchAllRestorantAsync());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    price: null,
    ratingsAverage: null,
    expecteddeliverytime: null,
  });

  const sortedData = [...restaurantData];

  // Sort by price
  if (filters.price === "lowToHigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (filters.price === "highToLow") {
    sortedData.sort((a, b) => b.price - a.price);
  }

  // Sort by ratingsAverage
  if (filters.ratingsAverage === "lowToHigh") {
    sortedData.sort((a, b) => a.ratingsAverage - b.ratingsAverage);
  } else if (filters.ratingsAverage === "highToLow") {
    sortedData.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  }

  // Sort by expecteddeliverytime
  if (filters.expecteddeliverytime === "lowToHigh") {
    sortedData.sort((a, b) => a.expecteddeliverytime - b.expecteddeliverytime);
  } else if (filters.expecteddeliverytime === "highToLow") {
    sortedData.sort((a, b) => b.expecteddeliverytime - a.expecteddeliverytime);
  }

  // for handel filter
  const handleFilterChange = (filterKey, sortOrder) => {
    setFilters(() => ({
      [filterKey]: sortOrder,
    }));
  };

  const clearFilter = () => {
    setFilters({
      price: null,
      ratingsAverage: null,
      expecteddeliverytime: null,
    });
  };

  // common function for close filter
  const closeFilterIcon = (filterValue, targetValue, onClickHandler) => {
    if (filterValue === targetValue) {
      return (
        <span>
          <MdCancel onClick={onClickHandler} />
        </span>
      );
    }
    return null;
  };

  return (
    <div>
      <HeaderOption />
      {/* <HeaderFilter /> */}

      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <span
              onClick={() =>
                handleFilterChange("expecteddeliverytime", "lowToHigh")
              }
              className={
                filters.expecteddeliverytime === "lowToHigh" ? "active" : ""
              }
            >
              Delivery Time(Low to High)
            </span>
            {closeFilterIcon(
              filters.expecteddeliverytime,
              "lowToHigh",
              clearFilter
            )}
            {/* {filters.expecteddeliverytime === "lowToHigh" && (
              <span>
                <MdCancel onClick={clearFilter} />
              </span>
            )} */}
          </li>
          <li className="navbar-item">
            <span
              onClick={() => {
                handleFilterChange("ratingsAverage", "highToLow");
              }}
              className={filters.ratingsAverage === "highToLow" ? "active" : ""}
            >
              Rating(High to Low)
            </span>
            {closeFilterIcon(filters.ratingsAverage, "highToLow", clearFilter)}
          </li>
          <li className="navbar-item">
            <span
              onClick={() => {
                handleFilterChange("ratingsAverage", "lowToHigh");
              }}
              className={filters.ratingsAverage === "lowToHigh" ? "active" : ""}
            >
              Rating(Low to High)
            </span>
            {closeFilterIcon(filters.ratingsAverage, "lowToHigh", clearFilter)}
          </li>
          <li className="navbar-item">
            <span
              onClick={() => {
                handleFilterChange("price", "highToLow");
              }}
              className={filters.price === "highToLow" ? "active" : ""}
            >
              Price(High to Low)
            </span>
            {closeFilterIcon(filters.price, "highToLow", clearFilter)}
          </li>
          <li className="navbar-item">
            <span
              onClick={() => {
                handleFilterChange("price", "lowToHigh");
              }}
              className={filters.price === "lowToHigh" ? "active" : ""}
            >
              Price(Low to High)
            </span>
            {closeFilterIcon(filters.price, "lowToHigh", clearFilter)}
          </li>
        </ul>
      </nav>
      {/* 
      <section className="popular-item">
        <SliderComponent data={PopularItem} heading={"Popular Item"} />
      </section> */}

      <section className="restorantname-section">
        <h2 style={{ color: "black" }}>Best Food in Bengaluru</h2>
        <div className="restorsntname-container">
          {sortedData.map((item, index) => (
            <Link to={`/restaurant/${item._id}`}>
              <RestorantCard props={item} key={index} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Delivery;
