import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        // object destructuring
        const { price, title, qty } = this.state;
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
                        <img alt="increase" className="action-icons" style={styles.iconImage} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt="decrease" className="action-icons" style={styles.iconImage} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="decrease" className="action-icons" style={styles.iconImage} src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1643993490~hmac=e724300bd8fb9fe7403ca1499e87615c" />
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