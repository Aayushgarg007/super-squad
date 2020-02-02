import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    console.log('this.props', this.props);
    
    return (
      <div>
        <h4>Characters</h4>
        <ul className='list-group'>
          {
            this.props.characters.map(character => {
              return(
                <li key={character.id} className='list-group-item'>
                  <div className='list-item'>{character.name}</div>
                  <div
                    className='list-item right-button'
                    onClick={() => this.props.addCharacterById(character.id)}
                  >
                    +
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);

// connect function is in react-redux. It allow us to access data from our store within this component.
// It literally connect to our redux state.
// connect function will have 2 parameters - 
//     first is mapStateToProps function which maps the data sent by redux to the props of the component.
//     second parameter is null for now.
// So now the data which is send by redux is accessible through props of the component we connect our redux to.

// ===== We can do this but this is lengthy =====
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
// ==============================================