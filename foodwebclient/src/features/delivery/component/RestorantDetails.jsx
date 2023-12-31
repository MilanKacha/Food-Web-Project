import React, { useEffect, useState } from "react";
import RestorantContent from "./RestorantContent";
import RestorantMenu from "./RestorantMenu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductsByRestorantIdAsync,
  fetchRestaurantByIdAsync,
  selectAllProductsByRestaurantId,
  selectRestaurantById,
} from "../RestorantSlice";

const RestorantDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // console.log(params.id);

  // fetch product by restaurant
  const ProductsByrestaurant = useSelector(selectAllProductsByRestaurantId);
  console.log(ProductsByrestaurant);
  useEffect(() => {
    dispatch(fetchAllProductsByRestorantIdAsync(params.id));
  }, [dispatch, params.id]);

  // fetch restaurant by Id
  const RestaurantById = useSelector(selectRestaurantById);

  useEffect(() => {
    dispatch(fetchRestaurantByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <RestorantContent Restaurant={RestaurantById} />
      <RestorantMenu ProductsByrestaurant={ProductsByrestaurant} />
    </>
  );
};

export default RestorantDetails;
