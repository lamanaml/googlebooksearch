import axios from "axios";
 
const URL = "https://www.googleapis.com/books/v1/volumes?q=";


 
export default {
    searchBooks: (query) => {
    //console.log(query);
    return axios.get(URL + query + APIKEY);
  },
   // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },
   
    getAllSaved: function() {
        return axios.get("/api/books");
    },
    getOneSaved: function(id) {
        return axios.get("/api/books/" + id);
    },
    removeSaved: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(data) {
        return axios.post("/api/books", data);
    }
}



