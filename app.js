const app = Vue.createApp({
    //this is the root component of the app
    data() {
        return {
            showBooks: true,
            url: 'http://www.thenetninjia.co.uk',
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: './assets/1.jpg',
                    isFav: true
                },
                {
                    title: 'name of the wind2',
                    author: 'patrick rothfuss2',
                    img: './assets/2.jpg',
                    isFav: false
                },
                {
                    title: 'name of the wind3',
                    author: 'patrick rothfuss3',
                    img: './assets/3.jpg',
                    isFav: true
                }
            ]
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleEvent(e, data) {
            //e argument will always be the first argument
            console.log(e, e.type)
            //access properties of e in the case of click and alt key is pressed at the same time
            if (data) console.log(data)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    // methods: {
    //     changeTitle(title) {
    //         this.title = title
    //     }
    // }
    computed: {
        //depends on the data above
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }

})

app.mount('#app')
//take app instance and mount it to the DOM with element with an id #app