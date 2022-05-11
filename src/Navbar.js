import { findByLabelText } from "@testing-library/react";
import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1652288469~hmac=9641cf7748df54d5c9f7da68abb30472"
                    alt="cart-icon"
                    style={styles.cartIcon}
                />
                <span style={styles.cartCount}> {props.count} </span> {/* cart count */}
            </div>
        </div >
    );
}

const styles = {
    cartIcon: {
        height: 40,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: 'lightBlue',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }

}

export default Navbar;