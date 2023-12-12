import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LogsTable from './components/LogsTable.jsx';
import Navigation from './components/Navigation.jsx';
import '../src/public/logs.css';

function Logs({ namespace }) {
  const [logs, setLogs] = useState([]);
  const getLogs = () => {
    fetch('http://localhost:3001/logs')
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getLogs();
  }, [namespace]);

  const filterByNamespace = () => {
    if (namespace !== 'All' && namespace !== '') {
      return logs.filter((log) => log.namespace === namespace);
    }
    return logs;
  };
  // console.log('logs filtered', filterByNamespace());
  // return <LogsTable data={filterByNamespace()} namespace={namespace} />;
  return (
    <div className="logsContainer">
      <Navigation className="navigation" />
      <div className="logsTableContainer">
      <h1 className="dashboard-title" style={{ marginBottom: '50px' }}>Logs</h1>
        <LogsTable data={filterByNamespace()} namespace={namespace} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ namespace }) => {
  console.log('namespace', namespace);
  return { namespace: namespace.selectedNamespace };
};

export default connect(mapStateToProps)(Logs);
