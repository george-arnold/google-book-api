import React, {Component} from 'react';


class Filters extends Component{
  render() {
    return (
      <form>
        <label htmlFor='type'>Type of Book</label>
        <select 
        id='type'
        name= 'type'
        onChange= {e => this.props.useFilterPrint(e.target.value)}
        >
          <option value=''>Any</option>
          <option value='horror'>Horror</option>
          <option value='action'>Action</option>
        </select>
        <label htmlFor='print'>Print</label>
        <select
        id= 'print'
        name= 'print'
        onChange= {e => this.props.useFilterPrint(e.target.value)}>
        >
          <option value=''>Any</option>
          <option value='BOOK'>Book</option>
          <option value='ebook'>Ebook</option>
        </select>
      </form>
    )
  }
}

export default Filters;