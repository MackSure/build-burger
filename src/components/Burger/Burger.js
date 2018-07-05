import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
class Burger extends React.Component {
    render () {
        let transformedIngredients = Object.keys(this.props.ingredients).map(igKey => {
            return [...Array(this.props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        }).reduce((prev, current) => {
            return prev.concat(current);
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start add ingredients!</p>
        }
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
        );
    }
}

export default Burger;