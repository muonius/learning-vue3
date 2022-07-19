// 1. Create Vue app
const app = Vue.createApp({
  //4. must create a data(){} and return a function
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
      eventName: "Double Click",
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
    handleEvent(e, data) {
      console.log(e);
      if (data) console.log(data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleDoubleClick(e) {
      this.eventName = "Double Clicked";
    },
  },
});

//3. Create a root component object
//2. Mount to element, only control this element
app.mount("#app");
