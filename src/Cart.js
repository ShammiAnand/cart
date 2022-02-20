import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        // calls the constructor of the React.Component class
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 0,
                    img: '',
                    id: 1
                },
                {
                    price: 29999,
                    title: 'Laptop',
                    qty: 2,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            // products: products
            // or
            products
        });
    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty > 0) {
            products[index].qty -= 1;
        }
        this.setState({
            products: products
        });
    }
    handleDeleteQuantity = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
            products: items
        })
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteQuantity={this.handleDeleteQuantity}
                    />
                })}
            </div>
        );
    }
}

export default Cart;