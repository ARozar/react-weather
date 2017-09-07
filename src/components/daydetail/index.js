import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';

import DayPart from './dayPart';

const Day = ({ day }) => {

    const dayPartElements =(day && day.length)? day.map((dayPart, index) => {
        return (
            <ListItem key={index}>
                <DayPart key={index} part={dayPart} />
            </ListItem>
        );
    }): null;
    const dayInMonth =(day && day.length)?day[0].dayInMonth:'';

   
    return (
        <div>
            <Paper>
                <List subheader={<ListSubheader>{<h3>{dayInMonth}</h3>}</ListSubheader>}>
                    {dayPartElements}
                </List>
            </Paper>
        </div>
    );
};

Day.propTypes = {
    day: PropTypes.array.isRequired
};

export default Day;