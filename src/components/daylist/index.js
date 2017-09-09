import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';


const DayList = ({ days, title, selectDay, loading }) => {

    const dayElements =(days && days.length)? days.map((day, index) => {
        day.index = index;
  
        const daysHasData = days && day.length;
  
        const dayAsString = (daysHasData) ? day[0].dayInMonth : '';
  
        const imgFromMiddleOfDay = (daysHasData) ? day[Math.floor(day.length / 2)].icon : '';
        return (
          <ListItem key={index} button onClick={() =>selectDay(day[0].dayInMonth)}>
            <Avatar alt={dayAsString} src={imgFromMiddleOfDay} />
            <ListItemText primary={dayAsString} />
          </ListItem>
        );
      }
      ) : null;

    const headerElement = (loading) ? <h2>Loading...</h2> : <h2>{title}</h2>;    

    return (
        <div>
            <Paper>
            <List subheader={<ListSubheader>{headerElement}</ListSubheader>}>
              {dayElements}
            </List>
          </Paper>
        </div>
    );
};

DayList.propTypes = {
    days: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    selectDay: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default DayList;