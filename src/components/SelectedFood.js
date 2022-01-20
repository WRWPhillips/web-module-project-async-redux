import React from 'react';
import { connect } from 'react-redux';

const SelectedFood = ({
  currentFood
}) => { 
  return <>
    {currentFood && 
    <table>
      <tbody>
        {
          currentFood.foodNutrients.map((nutrient) => (<tr key={nutrient.nutrientId}>
            <td>{nutrient.nutrientName}</td>
            <td>{nutrient.nutrientNumber}{nutrient.unitName}</td>
          </tr>))
        }
      </tbody>
    </table>
    }
  </>
}

const mapStateToProps = state => ({
  currentFood: state.foods.currentFood
});

export default connect( mapStateToProps )(SelectedFood);
