/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// import React from 'react';
// import ReactDOM from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div GroceryList>
        {
        this.props.groceryItems.map((item, index) => (
          <GroceryListItem item={item} key={index} />
        ))
        }
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    const style = {
      textDecoration: this.state.highlighted ? 'bold' : 'none',
    };

    return (
      <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList groceryItems={['apples', 'bananas']} />, document.getElementById('app'));
