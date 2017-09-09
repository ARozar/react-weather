import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Day from '../../components/daydetail';
import DayList from '../../components/daylist';
import * as fiveDayForecast from '../../actions/fivedayforecast';

export const styles = { 
  root: {
    flexGrow: 1,
    margin: 30
  },
  paper: {
    padding: 16,
    textAlign: 'center'
  },
};

export class FiveDayForecastPage extends React.Component {

  constructor(props) {
    super(props);

    this.loadWeather = this.loadWeather.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadWeather();
  }

  loadWeather() {
    this.props.actions.loadWeather();
  }

  render() {

    const { title, days, loading, error, classes, selectedDay } = this.props;

    const { selectDay } = this.props.actions;

    const mainSection = (loading || error)
      ? (!error)?<h1>loading...</h1>:<h1>Error</h1>
      : (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
              <DayList days={days} loading={loading} selectDay={selectDay} title={title} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Day day={selectedDay} />
            </Grid>
          </Grid>
        </div>
      );
    return (
      <div>
        { mainSection }
      </div>
      
    );
  }
}

FiveDayForecastPage.propTypes = {
  actions: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  days: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps({ fiveDayForecast, ajaxStatus }, ownProps) {

  return {
    days: fiveDayForecast.days,
    title: fiveDayForecast.title,
    selectedDay: fiveDayForecast.selectedDay,
    loading: ajaxStatus.loading,
    error: ajaxStatus.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fiveDayForecast, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FiveDayForecastPage));