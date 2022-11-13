class ShoppingList extends React.Component {
  state = {
    items1: 'ogorki',
    items2: 'sok',
    items3: 'cos do picia'
  }

  render() {
    return (
      <>
        <h1>Lista zakupow</h1>
        <ul>
          <ItemList name={this.state.items1} examplge={2 + 2} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    )
  }
}

class ItemList extends React.Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.examplge}</li>
    )
  }
}




ReactDOM.render(<ShoppingList />, document.getElementById('root'))

/* const ItemList = (props) => {
  return (
    <li>{props.name} - {props.examplge}</li>
  )
} */

/* render() {
  return (
    <>
      <h1>Lista zakupow</h1>
      <ul>
        <li>{this.state.items1}</li>
        <li>{this.state.items2}</li>
        <li>{this.state.items3}</li>
      </ul>
    </>
  )
}
} */