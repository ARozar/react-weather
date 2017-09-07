import React from 'react';
import PropTypes from 'prop-types';

const DayPart = ({part}) => {
  
  const { time, temp, description, icon, day } = part;
  
  return (
    <div>
       {time} | {description} | {temp}&deg;C | <img alt={day} src={icon}/>
    </div>
  );
};

DayPart.propTypes = {
  part: PropTypes.object.isRequired
};

export default DayPart;