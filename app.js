// 1. Create Vue app
const app = Vue.createApp({
  //4. must create a data(){} and return a function
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          age: 45,
          img: "assets/3.jpg",
          isFav: true,
        },
        {
          title: "Name of The Wind",
          author: "Patrick Rothfuss",
          age: 35,
          img: "assets/1.jpg",
          isFav: false,
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          age: 45,
          img: "assets/2.jpg",
          isFav: true,
        },
      ],
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
      mouseover: "Mouseover",
      mouseleave: "Mouseleave",
      dblclick: "Double Click",
    };
  },
  methods: {
    changeTitle(title) {
      //5. this points to the main component
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleMouseover(e) {
      this.mouseover = "Mouse overed";
    },
    handleMouseleave(e, data) {
      this.mouseleave = data;
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleDoubleClick(e) {
      this.dblclick = "Double Clicked";
      console.log(e);
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

//3. Create a root component object
//2. Mount to element, only control this element
app.mount("#app");
