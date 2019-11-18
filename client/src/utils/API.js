import axios from "axios";
// import APIKEY from "config/keys";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    searchBooks: (query) => {
    console.log("searching");
    return axios.get(URL + query); 
  },
  
   // Saves a book to the database
//   saveBook: function(bookData) {
    
//         return axios.delete("/api/books/" + id);
    // },
  
}



