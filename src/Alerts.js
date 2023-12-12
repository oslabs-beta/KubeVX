import React, { useState, useEffect, useCallback } from 'react';
import { useTable, useFilters, useExpanded } from 'react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { matchSorter } from 'match-sorter';
import ExpandableRow from './components/ExpandableRow.jsx';
import renderAlert from './utils/renderAlert.js';
import mockData from './mockData.js';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navigation from './components/Navigation.jsx';
import '../src/public/alerts.css';


function Alerts() {
  const [data, setData] = useState([]);

  const fetchAlerts = () => {
    // fetch('http://localhost:3001/alerts')
    //   .then((data) => data.json())
    //   .then((data) => formatData(data))
    //   .then((tableData) => setData(tableData));

    // Use the mock data instead of making an actual API request
    const tableData = formatData(mockData);
    setData(tableData);
  };

  // format data into table structure
  const formatData = (data) => {
    const groups = data.data.groups;
    const tableData = [];

    for (let group of groups) {
      for (let rule of group.rules) {
        if (rule.state) {
          const ruleObj = {
            group: group.name,
            state: rule.state,
            name: rule.name,
            severity: rule.labels?.severity,
            description: rule?.annotations.description,
            summary: rule?.annotations.summary,
            alerts: rule.alerts,
          };
          tableData.push(ruleObj);
        }
      }
    }
    return tableData;
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  // define table columns using React.useMemo
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        ),
      },
      {
        Header: 'Group',
        accessor: 'group',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Name',
        accessor: 'name',
        filter: 'fuzzyText',
      },
      {
        Header: 'State',
        accessor: 'state',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Severity',
        accessor: 'severity',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
    ],
    []
  );

  // render ExpandableRow
  const renderExpandableRow = useCallback(({ row }) => {
    return (
      <ExpandableRow
        key={row.original.name}
        alerts={row.original.alerts}
        description={row.original.description}
        summary={row.original.summary}
      />
    );
  });

  // default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={''}
      />
    );
  }

  //filter for selecting option from list
  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    const options = React.useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);

    // render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  //fuzzy text filter
  function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
  }

  fuzzyTextFilterFn.autoRemove = (val) => !val;

  function TableInstance({ columns, data }) {
    const defaultColumn = React.useMemo(
      () => ({
        Filter: DefaultColumnFilter,
      }),
      []
    );

    const filterTypes = React.useMemo(
      () => ({
        fuzzyText: fuzzyTextFilterFn,
      }),
      []
    );

    const {
      getTableProps,
      headerGroups,
      rows,
      prepareRow,
      state: { expanded },
    } = useTable(
      {
        columns,
        data,
        filterTypes,
        defaultColumn,
      },
      useFilters,
      useExpanded
    );

    return (
      <div>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <React.Fragment>
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {row.isExpanded ? renderExpandableRow({ row }) : null}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="alertsContainer">
      <Navigation className="navigation" />
      <div className="alertsTableContainer">
      <h1 className="dashboard-title" style={{ marginBottom: '50px' }}>Alerts</h1>
        <Paper>
          <TableInstance
            columns={columns}
            data={data}
            renderRowSubComponent={renderExpandableRow}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Alerts;
