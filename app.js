const app = Vue.createApp({
    //this is the root component of the app
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
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
    }
    // methods: {
    //     changeTitle(title) {
    //         this.title = title
    //     }
    // }
})

app.mount('#app')
//take app instance and mount it to the DOM with element with an id #app