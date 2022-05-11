import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import db from './firebase'
// import * as firebase from 'firebase'

class App extends React.Component {
  constructor() {
    // calls the constructor of the React.Component class
    super();
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount() {
    // db
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products: products,
    //       loading: false
    //     })

    //   })
    db
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data())
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products: products,
          loading: false
        })

      })
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   // products: products
    //   // or
    //   products
    // });
    const docRef = db.collection('products').doc(products[index].id)
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('document updated');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // if (products[index].qty > 0) {
    //   products[index].qty -= 1;
    // }
    // this.setState({
    //   products: products,
    //   loading: false
    // });
    const docRef = db.collection('products').doc(products[index].id)
    docRef
      .update({
        qty: (products[index].qty > 0 ? products[index].qty - 1 : 0)
      })
      .then(() => {
        console.log('document updated');
      })
      .catch((error) => {
        console.log(error)
      })
  }
  handleDeleteQuantity = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items
    // })
    const docRef = db.collection('products').doc(id)
    docRef
      .delete()
      .then(() => {
        console.log('deleted successfully');
      })
      .catch((error) => {
        console.log(error)
      })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    })
    return total;
  }

  addProduct = () => {
    db
      .collection('products')
      .add({
        img: "",
        price: 0,
        qty: 1,
        title: 'Something'
      })
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App" >
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add a product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
        />
        {loading && <h1>Loading products ...</h1>}
        <div style={styles.footer}>TOTAL: ₹{this.getCartTotal()}</div>
      </div>
    );
  }
}

const styles = {
  footer: {
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    background: 'lightBlue',
    display: 'flex',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;