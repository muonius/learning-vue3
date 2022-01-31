const app = Vue.createApp({
    //this is the root component of the app
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
    // methods: {
    //     changeTitle(title) {
    //         this.title = title
    //     }
    // }
})

app.mount('#app')
//take app instance and mount it to the DOM with element with an id #app