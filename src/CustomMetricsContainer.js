import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import SearchBar from '../src/components/SearchBar.jsx';
import StepBar from '../src/components/StepBar.jsx';
import TimeRangeBar from '../src/components/TimeRangeBar.jsx';
import { Button } from '@mui/material';
import LineChart from '../src/components/LineChartTemplate.jsx';
import '../src/public/customMetricsContainer.css';
import Navigation from './components/Navigation.jsx';

const CustomMetricsContainer = ({ namespace }) => {
  /* Manages state via hooks throughout the Custom Metrics page */
  const [allPromQL, setAllPromQL] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryStep, setSearchQueryStep] = useState('');
  const [searchQueryTime, setSearchQueryTime] = useState('');
  const [customMetrics, setCustomMetrics] = useState(null);

  /* Fetch request to backend API endpoint connected to prometheus queries, to display all queries in dropdown */
  const getAllPromQL = () => {
    fetch('http://localhost:3001/getqueries')
      .then((res) => res.json())
      .then((data) => {
        setAllPromQL(data);
      })
      .catch((error) => console.log(error));
  };

  /* Mapping time and step units to params */
  const timeMap = {
    '30 minutes': 0.5,
    '1 hour': 1,
    '2 hours': 2,
    '3 hours': 3,
    '5 hours': 5,
    '12 hours': 12,
    '24 hours': 24,
    '48 hours': 48,
  };

  const stepMap = {
    '30 seconds': '30s',
    '1 minute': '1m',
    '2 minutes': '2m',
    '5 minutes': '5m',
    '10 minutes': '10m',
  };

  /* Fetch request to backend API endpoint to source specific promQL query based on user input */
  const getCustomQueryMetrics = () => {
    let now = new Date();
    let nowCopy = new Date(now.getTime());
    nowCopy.setHours(nowCopy.getHours() - timeMap[searchQueryTime]);
    let endDateTime = now.toISOString();
    let startDateTime = nowCopy.toISOString();
    let step = stepMap[searchQueryStep];
    console.log(
      `/api/prometheus/custommetrics?startDateTime=${startDateTime}&endDateTime=${endDateTime}&step=${step}&namespace=${namespace}&queryString=${searchQuery}`
    );
    fetch(
      `http://localhost:3001/custommetrics?startDateTime=${startDateTime}&endDateTime=${endDateTime}&step=${step}&namespace=${namespace}&queryString=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCustomMetrics(data);
        console.log('custom metrics refetched');
      })
      .catch((error) => console.log(error));
  };

  const handleQueryClick = () => {
    getCustomQueryMetrics();
  };

  useEffect(() => {
    getAllPromQL();
  }, []);

  /* Renders submit query button and dropdown components (SearchBar, StepBar, TimeRangeBar) as well as custom line chart graph */

  const renderCustomQuery = () => {
    if (allPromQL.length) {
      return (
        <div class="customContainer">
          <Navigation className="navigation" />
          <div className="customMetricsContainer">
            <h1 className="dashboard-title" style={{ marginBottom: '80px' }}>Custom Metrics</h1>
            <Grid container spacing={2}>
              <Grid
                container
                item
                xs={12}
                justifyContent="space-evenly"
                direction="row"
                sm={4}
              >
                <SearchBar
                  searchquery={searchQuery}
                  setsearchquery={setSearchQuery}
                  options={allPromQL}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="space-evenly"
                direction="row"
                sm={4}
              >
                <StepBar
                  searchquerystep={searchQueryStep}
                  setsearchquerystep={setSearchQueryStep}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="space-evenly"
                direction="row"
                sm={4}
              >
                <TimeRangeBar
                  searchquerytime={searchQueryTime}
                  setsearchquerytime={setSearchQueryTime}
                />
              </Grid>
            </Grid>
            <Button
              className="submitQuery"
              onClick={handleQueryClick}
              variant="outlined"
              size="small"
              sx={{ marginTop: 1, marginBottom: 3 }}
            >
              Submit Query
            </Button>
            <div>&nbsp;</div>
            {customMetrics && (
              <LineChart
                label=""
                title=""
                chartData={customMetrics.data}
                query={customMetrics.queryString}
              />
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return <div className="customMetricsContainer">{renderCustomQuery()}</div>;
};

const mapStateToProps = ({ namespace }) => {
  return { namespace: namespace.selectedNamespace };
};

export default connect(mapStateToProps)(CustomMetricsContainer);
