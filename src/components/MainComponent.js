import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import HomePage from './HomeComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
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
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route
                        exact
                        path='/menu'
                        component={() => <Menu dishes={this.state.dishes} />}
                    />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default Main;
