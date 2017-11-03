import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import * as characters from '../../actions/characters';

class CharactersPage extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getCharacters();
    }

    render(){

        return(
            <div><pre>{this.props.characters.toString()}</pre></div>
        );
    }
}

function mapStateToProps({ characters, ajaxStatus }, ownProps) {
    
      return {
        characters: characters.list,
        loading: ajaxStatus.loading,
        error: ajaxStatus.error
      };
    }
    
    function mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(characters, dispatch)
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);