import React from "react";

class CartItem extends React.Component {
    // // used to update values later in the code
    // constructor() {
    //     // calls the constructor of the React.Component class
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    // }
    // use arrow functions to automatically bind functions to the class
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this.state: ', this.state);
        // function below is part of React.Component
        this.setState({
            qty: this.state.qty + 1
        });

        // setState form 2 - if previous state is required
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1;
        //     }
        // });
    }

    decreaseQuantity = () => {
        // console.log('this.state: ', this.state);
        // function below is part of React.Component
        this.setState({
            qty: (this.state.qty > 0 ? this.state.qty - 1 : 0)
        });
    }

    deleteQuantity = () => {
        // console.log('this.state: ', this.state);
        // function below is part of React.Component
        this.setState({
            qty: 0
        });
    }

    render() {
        // object destructuring
        const { price, title, qty } = this.props.product;
        // every Component needs to have a render function
        // it describes the component
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 30 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            style={styles.iconImage}
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            style={styles.iconImage}
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            style={styles.iconImage}
                            src="data:image/jpeg;base64,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"
                            onClick={() => this.props.onDeleteQuantity(this.props.product)}
                        />
                    </div>
                </div>
            </div >
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#CCC'
    },
    iconImage: {
        height: 25,
        width: 25,
        marginRight: 10
        // borderRadius: 10
    }
}

export default CartItem;