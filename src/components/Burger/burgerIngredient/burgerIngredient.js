import React, { Component } from 'react';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                     <div className={styles.BreadTop}>
                       <div calssName={styles.Seeds1}></div>
                       <div calssName={styles.Seeds2}></div>
                     </div>;
                );
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}></div>;
                break;  
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>;
                break;    
            case ('salad'):
                ingredient = <div className={styles.Salad}></div>;
                break;  
            case ('bacon'):
                ingredient = <div className={styles.Bacon}></div>;
                break;  
            defaault:
                ingredient = null;        
        }

        return ingredient;
    }
   
};

export default BurgerIngredient;