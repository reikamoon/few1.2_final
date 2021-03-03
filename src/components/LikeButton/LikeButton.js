import React from 'react';

class LikeButton extends React.Component {

   constructor(props){
       super(props)
       this.state = {
           count: 0,
           hasUpvoted: false,
       }
   }

   increment = () => {

     this.setState({
         count: this.state.count + 1,
     })
   }

   decrement = () => {

      this.setState({
        count: this.state.count - 1
      })
   }

   render() {
     return (
        <div>
            <button onClick={ this.state.hasVoted ? this.decrement: this.increment}>
                +
            </button>
            <span>{this.state.count}</span>
            <button onClick={this.decrement}>
                -
            </button>
        </div>
    );
  }
}

export default LikeButton;