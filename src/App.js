import Header from "./components/Header"
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders:[],
            items:[
                {
                    id: 1,
                    title: 'Bra',
                    desc: 'lorem ipsum dolor sit amet',
                    img: 'black_bra.jpg',
                    category: 'bra',
                    price: "39.99"
                },
                {
                    id: 2,
                    title: 'Shorts',
                    desc: 'lorem ipsum dolor sit amet',
                    img: 'shorts.jpg',
                    category: 'shorts',
                    price: "29.99"
                },
                {
                    id: 3,
                    title: 'Costume',
                    desc: 'lorem ipsum dolor sit amet',
                    img: 'costume.jpg',
                    category: 'costume',
                    price: "69.99"
                },
                {
                    id: 4,
                    title: 'Top',
                    desc: 'lorem ipsum dolor sit amet',
                    img: 'topbra.jpg',
                    category: 'top',
                    price: "19.99"
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }
  render(){
      return(
          <div className={'wrapper'}>
              <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
              <Items items={this.state.items} onAdd={this.addToOrder}/>
              <Footer/>
          </div>
          )
    }
    deleteOrder(id){
        this.setState({orders:this.state.orders.filter(el=> el.id!==id)})
    }
    addToOrder(item){
        let isInArray = false;
        this.state.orders.forEach(el=>{
            if(el.id===item.id)
                isInArray = true
        })
        if(!isInArray)
        this.setState({orders:[...this.state.orders, item]})
    }
}

export default App;
