/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// import React from 'react';
// import ReactDOM from 'react';

const GroceryList = (props) => (
  <div GroceryList>
    <GroceryListItem item={`${props.groceryItems[0]}`} />
    <GroceryListItem item={`${props.groceryItems[1]}`} />
    <Avocados />
    <Apples />
  </div>
);

const Apples = () => (
  <ul>apples</ul>
);

const Avocados = () => (
  <ul>avocados</ul>
);

const GroceryListItem = (props) => (
  <ul>{props.item}</ul>
);

ReactDOM.render(<GroceryList groceryItems={['apples', 'bananas']} />, document.getElementById('app'));
