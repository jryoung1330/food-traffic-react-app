export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (foodTruckId) => {
  return {
    type: TOGGLE_FAVORITE,
    id: foodTruckId,
  };
};