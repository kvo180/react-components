var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={['Broccoli', 'Chicken', 'Bread', 'Milk']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((item, index) =>
      <GroceryListItem item={item} key={index}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemMouseEnter() {
    this.setState({
      hover: true
    })
  };

  onListItemMouseLeave() {
    this.setState({
      hover: false
    })
  };

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
        onMouseLeave={this.onListItemMouseLeave.bind(this)}
        >{this.props.item}
      </li>
    );
  }
};

// var Broccoli = () => (
//   <li>Broccoli</li>
// );

// var Chicken = () => (
//   <li>Chicken</li>
// );

ReactDOM.render(<App />, document.getElementById('app'));
