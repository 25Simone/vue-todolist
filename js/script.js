new Vue({
    el: '#app',
    data: {
        todo: [
            {
                text: 'Fare i compiti',
                done: false,
            },

            {
                text: 'Fare la spesa',
                done: true,
            },

            {
                text: 'Fare il bucato',
                done: false,
            },

            {
                text: "Pagare l'affitto",
                done: true,
            },
        ],
        newItemText: '',
    },

    methods: {
        removeItem: function(index) {
            this.todo.splice(index, 1);
        },
        addItem: function() {
            const newItem = {
                text: this.newItemText,
                done: false,
            };
            this.todo.push(newItem);
            this.newItemText = '';
        },
        itemDone: function(index) {
            this.todo[index].done = !this.todo[index].done;
        }
    },
});