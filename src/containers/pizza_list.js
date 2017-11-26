import React,{Component} from 'react';
import {connect}  from 'react-redux';
import {selectPizza} from '../actions/index';
import {bindActionCreators} from 'redux';
import {addPizza} from '../actions/select_pizza_action';


class PizzaList extends Component{
  constructor(props){
    super(props);
    this.state = {
      pizzas: this.props.pizzas,
      pizzaGroups : this.props.pizzaGroups
    }
    //this.renderGroupWiseList = this.renderGroupWiseList.bind(this);
    //this.renderGroupList = this.renderGroupList.bind(this);
  }

  componentWillReceiveProps(nextProps){
    const {pizzas,pizzaGroups} = nextProps;
    this.setState(
      {pizzas:pizzas}
    )
  }


  renderGroupWiseList(id, price, pizzaList){
    return pizzaList.map((pizza)=>{
      return (
        (
          (id == pizza.groupId) ?
          <p key={pizza.name}>
            <li key={pizza.id} className="list-group-item"><strong>Pizza Name: {pizza.name}</strong>
            <br/>Ingredients: {pizza.description}
            <span><button type="button" className="btn btn-success" onClick={()=> this.props.addPizza(pizza.id, price)}>+</button></span>
            </li>
          </p>
          :
          ''
        )

      )
    })
  }

  renderGroupList(pizzaGroups, pizzaList){
    return pizzaGroups.map((pizzaGroup)=>{
      return(
        <div key={pizzaGroup.id} className="panel panel-default">
        <div className="panel-heading">
          <h1 className="panel-title">{pizzaGroup.name}<br/> price : {pizzaGroup.price} sek</h1>
        </div>
        <div className="panel-body">

            <ul key={pizzaGroup.id} className="list-group">
              {this.renderGroupWiseList(pizzaGroup.id, pizzaGroup.price, pizzaList)}
            </ul>
        </div>
      </div>
      )
    })
  }

  render(){
    const pizzaList = this.state.pizzas;
    const pizzaGroups = this.state.pizzaGroups;
    //console.log("rendering");
    return(

      <div className="col-md-4">
        <div className="panel panel-default">
          <table>
            {this.renderGroupList(pizzaGroups, pizzaList)}
          </table>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){

  return {
      pizzas: state.pizzas,
      pizzaGroups : state.pizzaGroups
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectPizza:selectPizza, addPizza:addPizza}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);
