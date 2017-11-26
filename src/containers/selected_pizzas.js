import React,{Component} from 'react';
import {connect}  from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPizza} from '../actions/select_pizza_action';
//import {  SUBTRACT_PIZZA } from '../actions/action_type';


class SelectedPizzas extends Component{

  constructor(props){
    super(props);
    this.state = {
      selectedPizzas: this.props.selectedPizzas,
      pizzas : this.props.pizzas
    }

  }

  static contextTypes = {
        store: React.PropTypes.object.isRequired
  };


  componentWillReceiveProps(nextProps){
    const {selectedPizzas,pizzas} = nextProps;
  }



  renderSelectedPizzaList(selectedPizzas){

    selectedPizzas.map((items)=>{
      return(
        <div key={items.expectedPrice} className="panel panel-default">
          <div className="panel-heading">
            <h1 className="panel-title">{items.expectedPrice} sek</h1>
          </div>
        </div>)
      })
    }

  render(){
    const selectedPizzas = this.state.selectedPizzas;

    const pizzas = this.state.pizzas;

    return(
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">
             <h1 className="panel-title">Selected Pizzas to Order</h1>
          </div>
          <div className="panel-body">
              <ul key={selectedPizzas.expectedPrice} className="list-group">
                {this.renderSelectedPizzaList}
              </ul>
          </div>

          <button type="button" className="btn btn-success" >Place Order</button>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
      selectedPizzas: state.selectedPizzas,
      pizzas: state.pizzas
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addPizza:addPizza}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(SelectedPizzas);
