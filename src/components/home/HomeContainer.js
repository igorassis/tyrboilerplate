import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { any, objectOf } from 'prop-types';
import { bindActionCreators } from 'redux';

import * as homeActions from './HomeActions';

import styled from 'styled-components';
import logo from '../../resources/images/logo.svg';
import './Home.scss';

const Wrapper = styled.section`
  padding: 4em;
  border-radius: 10px;
  background: gray;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;


class HomeContainer extends Component {

  constructor(props){
    super(props);
    this.state ={

    }
  }

  componentWillMount(){
    this.props.actions.loadPerson();
    console.log("Person:", this.props.person);
  }

  render() {
    const { person } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         <Wrapper>
           <Title>
            {person ? person.name : "NÃO ROLOU"}
           </Title>
         </Wrapper>
        </header>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  person: PropTypes.object.isRequired
};

// HomeContainer.defaultProps = {
//   person: {
//     name: "Luke Default"
//   }
// };

const mapStateToProps = (state) => {
  return {
    person: state.person
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
