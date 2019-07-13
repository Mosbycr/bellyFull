import axios from "axios";

export default {
  // Gets all donations
  getFood: function() {
    return axios.get("/api/food");
  },
  // Gets the book with the given id
  getFoodById: function(id) {
    return axios.get("/api/food/" + id);
  },

  updateFoodById: function(id, food) {
    return axios.put("/api/food/" + id, food);
  }
  // Deletes the book with the given id
  // deleteFood: function(id) {
  //   return axios.delete("/api/food/" + id);
  // },
  // // Saves a book to the database
  // saveFood: function(bookData) {
  //   return axios.post("/api/food", bookData);
  // }
};
