import React from 'react'

class Moves extends React.Component {
    render(){
        let list = [];

        for(let i=0; i<this.props.history.length; i++) {
            const desc = i ?
                  'Go to move #' + i :
                  'Go to geme start';
            const className = i==this.props.stepNumber ? "selectMove" : "unselectMove";
            list.push(
                <li key={i}>
                  <button
                    className={className}
                    onClick={()=>this.props.onClick(i)}>
                    {desc}
                  </button>
                </li>
            )
        }

        if(this.props.reverse){
          list.reverse();
        }

        return(list)

        // const moves = this.props.history.map((step,move) =>{
        //   const desc = move ?
        //         'Go to move #' + move :
        //         'Go to geme start';
        //   const className = move==this.props.stepNumber ? "selectMove" : "unselectMove";
        //   return (
        //     <li key={move}>
        //       <button
        //         className={className}
        //         onClick={()=>this.props.onClick(move)}>
        //         {desc}
        //       </button>
        //     </li>
        //   );
        // });
        //
        // if(this.props.reverse){
        //   moves.reverse();
        // }
        // return (
        //     moves
        // )
    }
}

export default Moves
