import React, {Component, PropTypes} from 'react'
import TodoItem from '../TodoItem'

class Main extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <section id="main">
        <ul>
          <TodoItem />
        </ul>
      </section>
    )
  }

};

export default Main