import React, { Component } from 'react';
import DishDetail from './Dishdetail';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            dishes: DISHES,
        };
    }

    onDishSelect(dish) {
        let selectedItem = this.state.dishes.filter(function (item) {
            return item.id === dish.id;
        });
        this.setState({
            selectedDish: selectedItem[0],
        });
    }

    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <div className='row'>
                        <Menu
                            dishes={this.state.dishes}
                            onClick={(dish) => this.onDishSelect(dish)}
                        />
                    </div>
                    <div className='row'>
                        <DishDetail
                            selectedDish={this.state.selectedDish}></DishDetail>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Main;
