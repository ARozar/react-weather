import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuLink: {
    marginLeft: 12,
    marginRight: 20,
  },
};

class NavMenu extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar disableGutters>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.handleClick}>
            <MenuIcon/>
          </IconButton>
          <Menu
            anchorEl={this.state.anchorEl}
            open={this.state.open}>
            <MenuItem>
              <Link to="/" onClick={this.handleRequestClose}>Home</Link>
            </MenuItem>
          </Menu>
          <Typography type="title" color="inherit" className={classes.flex}>
            Five day forecast
        </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(NavMenu);