import React from "react";

class CartItem extends React.Component {
    // every Component needs to have a render function
    // it describes the component
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 30 }}>Phone</div>
                    <div style={{ color: '#777' }}>Rs 999</div>
                    <div style={{ color: '#777' }}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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
    }
}

export default CartItem;