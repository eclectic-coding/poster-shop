new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [
			{ title: "Product 1", id: 1, price: 9.99 },
			{ title: "Product 2", id: 2, price: 9.99 },
			{ title: "Product 3", id: 3, price: 9.99 }
		],
		cart: []
	},
	methods: {
		addToCart: function(product) {
			this.total += product.price;
			let found = false;
			for (let i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === product.id) {
					found = true;
					this.cart[i].qty++;
				}
			}
			if (!found) {
				this.cart.push({
					id: product.id,
					title: product.title,
					price: product.price,
					qty: 1
				});
			}
		},
		inc: function (item) {
			item.qty++;
			this.total += item.price;
		},
		dec: function (item) {
			item.qty--;
			this.total -= item.price;
			if (item.qty <= 0) {
				const i = this.cart.indexOf(item);
				this.cart.splice(i, 1)
			}
		},
	},
	filters: {
		capitalize: function (value) {
			if (!value) return '';
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		},
		currency: function (price) {
			return "$".concat(price.toFixed(2));
		}
	}
});

