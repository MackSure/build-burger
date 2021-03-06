import React from 'react';
import {connect} from 'react-redux';
import axios from '../../axios-order';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Order from '../../components/Order/Order';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = <Spinner/>;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                return <Order
                    ingredients={order.ingredients}
                    price={+order.price}
                    key={order.id}
                />
            });
        };
        return (
            <div>
                {orders}
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log('[orders] mapStateToProps',state.order);
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios));