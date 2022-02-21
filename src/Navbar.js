import { findByLabelText } from "@testing-library/react";
import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img
                    src="https://cdn-icons.flaticon.com/png/512/5542/premium/5542671.png?token=exp=1645462720~hmac=e9ecdc1d51206064120b1e781a73b101"
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