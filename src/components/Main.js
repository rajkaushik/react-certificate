import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from './Dishdetail';
import Menu from './Menu';
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
        this.setState({ selectedDish: dish });
    }

    componentDidUpdate() {
        console.log(this.selectedDish?.name);
    }

    render() {
        return (
            <>
                <Navbar dark color='primary'>
                    <div className='container'>
                        <NavbarBrand href='/'>
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <div className='container'>
                    {this.state.selectedDish?.name}
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
            </>
        );
    }
}

export default Main;
