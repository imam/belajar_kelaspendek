const db = require('./firebase').db;

const app = new Vue({
	el: '#app',
	data: {
		product_input: '',
		products: []
	},
	mounted() {
		db
			.collection("products")
			.onsnapshot(function(collection) {
				app.products = collection.docs.map(doc => doc.data());
			});
	}
});

