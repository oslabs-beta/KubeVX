import React, { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import '../src/public/register.css';
import axios from 'axios';  // Using ES6 import syntax

const DBaordCreate = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [dashboardName, setDashboardName] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   // Replace 'your_grafana_api_key' with your actual API key
    //   const apiKey = '';

    //   // JSON configuration of the dashboard you want to import (replace with 3662 or your specific dashboard JSON)
    //   const dashboardJson = {
    //     // "folderId": 0, // Replace with the desired folder ID
    //     // "overwrite": false, // Set to true if you want to update an existing dashboard
    //     // "inputs": [],
    //     // "folderTitle": 'General', // Replace with the desired folder title
    //     // "dashboard": {
    //     //   // Add the title field
    //     //   "title": dashboardName, // Replace with the desired title
    //     //   // Include other dashboard configurations...
    //     // },
    //     "__inputs": [
    //       {
    //         "name": "DS_THEMIS",
    //         "label": "prometheus",
    //         "description": "A prometheus server with prometheus server metrics",
    //         "type": "datasource",
    //         "pluginId": "prometheus",
    //         "pluginName": "Prometheus"
    //       }
    //     ],
    //     "__requires": [
    //       {
    //         "type": "grafana",
    //         "id": "grafana",
    //         "name": "Grafana",
    //         "version": "4.5.0-beta1"
    //       },
    //       {
    //         "type": "panel",
    //         "id": "graph",
    //         "name": "Graph",
    //         "version": ""
    //       },
    //       {
    //         "type": "datasource",
    //         "id": "prometheus",
    //         "name": "Prometheus",
    //         "version": "1.0.0"
    //       },
    //       {
    //         "type": "panel",
    //         "id": "singlestat",
    //         "name": "Singlestat",
    //         "version": ""
    //       },
    //       {
    //         "type": "panel",
    //         "id": "table",
    //         "name": "Table",
    //         "version": ""
    //       }
    //     ],
    //     "annotations": {
    //       "list": [
    //         {
    //           "datasource": "${DS_THEMIS}",
    //           "enable": true,
    //           "expr": "sum(changes(prometheus_config_last_reload_success_timestamp_seconds{instance=~\"$instance\"}[10m])) by (instance)",
    //           "hide": false,
    //           "iconColor": "rgb(0, 96, 19)",
    //           "limit": 100,
    //           "name": "reloads",
    //           "showIn": 0,
    //           "step": "5m",
    //           "type": "alert"
    //         },
    //         {
    //           "datasource": "${DS_THEMIS}",
    //           "enable": true,
    //           "expr": "count(sum(up{instance=\"$instance\"}) by (instance) < 1)",
    //           "hide": false,
    //           "iconColor": "rgba(255, 96, 96, 1)",
    //           "limit": 100,
    //           "name": "down",
    //           "showIn": 0,
    //           "step": "5m",
    //           "type": "alert"
    //         }
    //       ]
    //     },
    //     "description": "Get started faster with Grafana Cloud then easily build these dashboards. https://grafana.com/products/cloud/\nOverview of metrics from Prometheus 2.0.  \nUseful for using prometheus to monitor your prometheus.\nRevisions welcome!",
    //     "editable": true,
    //     "gnetId": 3662,
    //     "graphTooltip": 0,
    //     "hideControls": false,
    //     "id": null,
    //     "links": [],
    //     "refresh": "30s",
    //     "rows": [
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(245, 54, 54, 0.9)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(50, 172, 45, 0.97)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "decimals": 3,
    //             "description": "Percentage of uptime during the most recent $interval period.  Change the period with the 'interval' dropdown above.",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": false
    //             },
    //             "id": 2,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "%",
    //             "postfixFontSize": "100%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 3,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": true,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": false
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "avg(avg_over_time(up{instance=~\"$instance\",job=~\"$job\"}[$interval]) * 100)",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "",
    //                 "refId": "A",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "90, 99",
    //             "title": "Uptime [$interval]",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           },
    //           {
    //             "columns": [],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Servers which are DOWN RIGHT NOW! \nFIX THEM!!",
    //             "fontSize": "100%",
    //             "hideTimeOverride": true,
    //             "id": 25,
    //             "links": [],
    //             "pageSize": null,
    //             "scroll": true,
    //             "showHeader": true,
    //             "sort": {
    //               "col": 0,
    //               "desc": true
    //             },
    //             "span": 3,
    //             "styles": [
    //               {
    //                 "alias": "Time",
    //                 "dateFormat": "YYYY-MM-DD HH:mm:ss",
    //                 "pattern": "Time",
    //                 "type": "hidden"
    //               },
    //               {
    //                 "alias": "",
    //                 "colorMode": null,
    //                 "colors": [
    //                   "rgba(245, 54, 54, 0.9)",
    //                   "rgba(237, 129, 40, 0.89)",
    //                   "rgba(50, 172, 45, 0.97)"
    //                 ],
    //                 "dateFormat": "YYYY-MM-DD HH:mm:ss",
    //                 "decimals": 2,
    //                 "pattern": "/__name__|job|Value/",
    //                 "thresholds": [],
    //                 "type": "hidden",
    //                 "unit": "short"
    //               },
    //               {
    //                 "alias": "   ",
    //                 "colorMode": "cell",
    //                 "colors": [
    //                   "rgba(255, 0, 0, 0.9)",
    //                   "rgba(237, 129, 40, 0.89)",
    //                   "rgba(255, 0, 0, 0.97)"
    //                 ],
    //                 "dateFormat": "YYYY-MM-DD HH:mm:ss",
    //                 "decimals": 2,
    //                 "link": false,
    //                 "pattern": "instance",
    //                 "thresholds": [
    //                   "",
    //                   "",
    //                   ""
    //                 ],
    //                 "type": "string",
    //                 "unit": "short"
    //               }
    //             ],
    //             "targets": [
    //               {
    //                 "expr": "up{instance=~\"$instance\",job=~\"$job\"} < 1",
    //                 "format": "table",
    //                 "intervalFactor": 2,
    //                 "refId": "A",
    //                 "step": 2
    //               }
    //             ],
    //             "timeFrom": "1s",
    //             "title": "Currently Down",
    //             "transform": "table",
    //             "type": "table"
    //           },
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(50, 172, 45, 0.97)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(245, 54, 54, 0.9)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Total number of time series in prometheus",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 12,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 3,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": true,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": true
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(prometheus_tsdb_head_series{job=~\"$job\",instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "B",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "1000000,2000000",
    //             "title": "Total Series",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           },
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": false,
    //             "colors": [
    //               "rgba(245, 54, 54, 0.9)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(50, 172, 45, 0.97)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 14,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 3,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": true,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": true
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(prometheus_tsdb_head_chunks{job=~\"$job\",instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "B",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "",
    //             "title": "Memory Chunks",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "at a glance",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 236,
    //         "panels": [
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(50, 172, 45, 0.97)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(245, 54, 54, 0.9)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "The total number of rule group evaluations missed due to slow rule group evaluation.",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 16,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 2,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": false,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": false
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(sum_over_time(prometheus_evaluator_iterations_missed_total{job=~\"$job\",instance=~\"$instance\"}[$interval]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "A",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "1,10",
    //             "title": "Missed Iterations [$interval]",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           },
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(50, 172, 45, 0.97)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(245, 54, 54, 0.9)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "The total number of rule group evaluations skipped due to throttled metric storage.",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 18,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 2,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": false,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": false
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(sum_over_time(prometheus_evaluator_iterations_skipped_total{job=~\"$job\",instance=~\"$instance\"}[$interval]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "A",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "1,10",
    //             "title": "Skipped Iterations [$interval]",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           },
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(50, 172, 45, 0.97)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(245, 54, 54, 0.9)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Total number of scrapes that hit the sample limit and were rejected.",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 19,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 2,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": false,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": false
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(sum_over_time(prometheus_target_scrapes_exceeded_sample_limit_total{job=~\"$job\",instance=~\"$instance\"}[$interval]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "A",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "1,10",
    //             "title": "Tardy Scrapes [$interval]",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           },
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(50, 172, 45, 0.97)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(245, 54, 54, 0.9)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Number of times the database failed to reload block data from disk.",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 13,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 2,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": false,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": false
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(sum_over_time(prometheus_tsdb_reloads_failures_total{job=~\"$job\",instance=~\"$instance\"}[$interval]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "A",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "1,10",
    //             "title": "Reload Failures [$interval]",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           },
    //           {
    //             "cacheTimeout": null,
    //             "colorBackground": false,
    //             "colorValue": true,
    //             "colors": [
    //               "rgba(50, 172, 45, 0.97)",
    //               "rgba(237, 129, 40, 0.89)",
    //               "rgba(245, 54, 54, 0.9)"
    //             ],
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Sum of all skipped scrapes",
    //             "format": "none",
    //             "gauge": {
    //               "maxValue": 100,
    //               "minValue": 0,
    //               "show": false,
    //               "thresholdLabels": false,
    //               "thresholdMarkers": true
    //             },
    //             "id": 20,
    //             "interval": null,
    //             "links": [],
    //             "mappingType": 1,
    //             "mappingTypes": [
    //               {
    //                 "name": "value to text",
    //                 "value": 1
    //               },
    //               {
    //                 "name": "range to text",
    //                 "value": 2
    //               }
    //             ],
    //             "maxDataPoints": 100,
    //             "nullPointMode": "connected",
    //             "nullText": null,
    //             "postfix": "",
    //             "postfixFontSize": "50%",
    //             "prefix": "",
    //             "prefixFontSize": "50%",
    //             "rangeMaps": [
    //               {
    //                 "from": "null",
    //                 "text": "N/A",
    //                 "to": "null"
    //               }
    //             ],
    //             "span": 4,
    //             "sparkline": {
    //               "fillColor": "rgba(31, 118, 189, 0.18)",
    //               "full": false,
    //               "lineColor": "rgb(31, 120, 193)",
    //               "show": false
    //             },
    //             "tableColumn": "",
    //             "targets": [
    //               {
    //                 "expr": "sum(sum_over_time(prometheus_target_scrapes_exceeded_sample_limit_total{job=~\"$job\",instance=~\"$instance\"}[$interval])) + \nsum(sum_over_time(prometheus_target_scrapes_sample_duplicate_timestamp_total{job=~\"$job\",instance=~\"$instance\"}[$interval])) + \nsum(sum_over_time(prometheus_target_scrapes_sample_out_of_bounds_total{job=~\"$job\",instance=~\"$instance\"}[$interval])) + \nsum(sum_over_time(prometheus_target_scrapes_sample_out_of_order_total{job=~\"$job\",instance=~\"$instance\"}[$interval])) ",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "refId": "A",
    //                 "step": 40
    //               }
    //             ],
    //             "thresholds": "1,10",
    //             "title": "Skipped Scrapes [$interval]",
    //             "type": "singlestat",
    //             "valueFontSize": "100%",
    //             "valueMaps": [
    //               {
    //                 "op": "=",
    //                 "text": "N/A",
    //                 "value": "null"
    //               }
    //             ],
    //             "valueName": "current"
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "quick numbers",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "All non-zero failures and errors",
    //             "fill": 1,
    //             "id": 33,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 12,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(increase(net_conntrack_dialer_conn_failed_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Failed Connections",
    //                 "refId": "A",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_evaluator_iterations_missed_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Missed Iterations",
    //                 "refId": "B",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_evaluator_iterations_skipped_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Skipped Iterations",
    //                 "refId": "C",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_rule_evaluation_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Evaluation",
    //                 "refId": "D",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_azure_refresh_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Azure Refresh",
    //                 "refId": "E",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_consul_rpc_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Consul RPC",
    //                 "refId": "F",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_dns_lookup_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "DNS Lookup",
    //                 "refId": "G",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_ec2_refresh_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "EC2 Refresh",
    //                 "refId": "H",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_gce_refresh_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "GCE Refresh",
    //                 "refId": "I",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_marathon_refresh_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Marathon Refresh",
    //                 "refId": "J",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_openstack_refresh_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Openstack Refresh",
    //                 "refId": "K",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_sd_triton_refresh_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Triton Refresh",
    //                 "refId": "L",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_target_scrapes_exceeded_sample_limit_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Sample Limit",
    //                 "refId": "M",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_target_scrapes_sample_duplicate_timestamp_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Duplicate Timestamp",
    //                 "refId": "N",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_target_scrapes_sample_out_of_bounds_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Timestamp Out of Bounds",
    //                 "refId": "O",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_target_scrapes_sample_out_of_order_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Sample Out of Order",
    //                 "refId": "P",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_treecache_zookeeper_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Zookeeper",
    //                 "refId": "Q",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_tsdb_compactions_failed_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "TSDB Compactions",
    //                 "refId": "R",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_tsdb_head_series_not_found{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Series Not Found",
    //                 "refId": "S",
    //                 "step": 2
    //               },
    //               {
    //                 "expr": "sum(increase(prometheus_tsdb_reloads_failures_total{instance=~\"$instance\"}[5m])) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Reload",
    //                 "refId": "T",
    //                 "step": 2
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Failures and Errors",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Errors",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "errors",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": "250px",
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 1,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": true,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "up{instance=~\"$instance\",job=~\"$job\"}",
    //                 "format": "time_series",
    //                 "interval": "",
    //                 "intervalFactor": 1,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 2
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Upness (stacked)",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "decimals": 0,
    //                 "format": "none",
    //                 "label": "Up",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": false
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 5,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "prometheus_tsdb_head_chunks{job=~\"$job\",instance=~\"$instance\"}",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Storage Memory Chunks",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Chunks",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "up",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 3,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "prometheus_tsdb_head_series{job=~\"$job\",instance=~\"$instance\"}",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Series Count",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Series",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 32,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [
    //               {
    //                 "alias": "removed",
    //                 "transform": "negative-Y"
    //               }
    //             ],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum( increase(prometheus_tsdb_head_series_created_total{instance=~\"$instance\"}[5m]) )",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "created",
    //                 "refId": "A",
    //                 "step": 4
    //               },
    //               {
    //                 "expr": "sum( increase(prometheus_tsdb_head_series_removed_total{instance=~\"$instance\"}[5m]) )",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "removed",
    //                 "refId": "B",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Series Created / Removed",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Series Count",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "series",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {
    //               "10.58.3.10:80": "#BA43A9"
    //             },
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Rate of total number of appended samples",
    //             "fill": 1,
    //             "id": 4,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 12,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "rate(prometheus_tsdb_head_samples_appended_total{job=~\"$job\",instance=~\"$instance\"}[1m])",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 2
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Appended Samples per Second",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Samples / Second",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "appended samples",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Total number of syncs that were executed on a scrape pool.",
    //             "fill": 1,
    //             "id": 6,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(prometheus_target_scrape_pool_sync_total{job=~\"$job\",instance=~\"$instance\"}) by (scrape_job)",
    //                 "format": "time_series",
    //                 "hide": false,
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{scrape_job}}",
    //                 "refId": "B",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Scrape Sync Total",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Syncs",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Actual interval to sync the scrape pool.",
    //             "fill": 1,
    //             "id": 21,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(rate(prometheus_target_sync_length_seconds_sum{job=~\"$job\",instance=~\"$instance\"}[2m])) by (scrape_job) * 1000",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{scrape_job}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Target Sync",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Milliseconds",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "sync",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 29,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "scrape_duration_seconds{instance=~\"$instance\"}",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Scrape Duration",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Seconds",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Total number of rejected scrapes",
    //             "fill": 1,
    //             "id": 30,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(prometheus_target_scrapes_exceeded_sample_limit_total{job=~\"$job\",instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "exceeded sample limit",
    //                 "refId": "A",
    //                 "step": 4
    //               },
    //               {
    //                 "expr": "sum(prometheus_target_scrapes_sample_duplicate_timestamp_total{job=~\"$job\",instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "hide": false,
    //                 "intervalFactor": 2,
    //                 "legendFormat": "duplicate timestamp",
    //                 "refId": "B",
    //                 "step": 4
    //               },
    //               {
    //                 "expr": "sum(prometheus_target_scrapes_sample_out_of_bounds_total{job=~\"$job\",instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "hide": false,
    //                 "intervalFactor": 2,
    //                 "legendFormat": "out of bounds",
    //                 "refId": "C",
    //                 "step": 4
    //               },
    //               {
    //                 "expr": "sum(prometheus_target_scrapes_sample_out_of_order_total{job=~\"$job\",instance=~\"$instance\"}) ",
    //                 "format": "time_series",
    //                 "hide": false,
    //                 "intervalFactor": 2,
    //                 "legendFormat": "out of order",
    //                 "refId": "D",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Rejected Scrapes",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "decimals": 0,
    //                 "format": "short",
    //                 "label": "Scrapes",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "scrapes",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "The duration of rule group evaluations",
    //             "fill": 1,
    //             "id": 10,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "1000 * rate(prometheus_evaluator_duration_seconds_sum{job=~\"$job\", instance=~\"$instance\"}[5m]) / rate(prometheus_evaluator_duration_seconds_count{job=~\"$job\", instance=~\"$instance\"}[5m])",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "E",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Average Rule Evaluation Duration",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Milliseconds",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 11,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(rate(http_request_duration_microseconds_count{job=~\"$job\",instance=~\"$instance\"}[1m])) by (handler) > 0",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{handler}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "HTTP Request Duration",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Microseconds",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 15,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(prometheus_engine_query_duration_seconds_sum{job=~\"$job\",instance=~\"$instance\"}) by (slice)",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{slice}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Prometheus Engine Query Duration Seconds",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Seconds",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "Rule-group evaluations \n - total\n - missed due to slow rule group evaluation\n - skipped due to throttled metric storage",
    //             "fill": 1,
    //             "id": 31,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(rate(prometheus_evaluator_iterations_total{job=~\"$job\", instance=~\"$instance\"}[5m]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Total",
    //                 "refId": "B",
    //                 "step": 4
    //               },
    //               {
    //                 "expr": "sum(rate(prometheus_evaluator_iterations_missed_total{job=~\"$job\", instance=~\"$instance\"}[5m]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Missed",
    //                 "refId": "A",
    //                 "step": 4
    //               },
    //               {
    //                 "expr": "sum(rate(prometheus_evaluator_iterations_skipped_total{job=~\"$job\", instance=~\"$instance\"}[5m]))",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "Skipped",
    //                 "refId": "C",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Rule Evaluator Iterations",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "iterations",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "durations",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 22,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 12,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "rate(prometheus_notifications_sent_total[5m])",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 2
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Notifications Sent",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Notifications",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "notifications",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 23,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "(time() - prometheus_config_last_reload_success_timestamp_seconds{job=~\"$job\",instance=~\"$instance\"}) / 60",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Minutes Since Successful Config Reload",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Minutes",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 24,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "prometheus_config_last_reload_successful{job=~\"$job\",instance=~\"$instance\"}",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 4
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Successful Config Reload",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "decimals": 0,
    //                 "format": "short",
    //                 "label": "Success",
    //                 "logBase": 1,
    //                 "max": "1",
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "config",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": false,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "GC invocation durations",
    //             "fill": 1,
    //             "id": 28,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 12,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(rate(go_gc_duration_seconds_sum{instance=~\"$instance\",job=~\"$job\"}[2m])) by (instance)",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{instance}}",
    //                 "refId": "A",
    //                 "step": 2
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "GC Rate / 2m",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "garbage collection",
    //         "titleSize": "h6"
    //       },
    //       {
    //         "collapse": true,
    //         "height": 250,
    //         "panels": [
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "description": "This is probably wrong!  Please help.",
    //             "fill": 1,
    //             "id": 26,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [
    //               {
    //                 "alias": "allocated",
    //                 "stack": false
    //               }
    //             ],
    //             "spaceLength": 10,
    //             "span": 6,
    //             "stack": true,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(go_memstats_alloc_bytes_total{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "hide": true,
    //                 "intervalFactor": 2,
    //                 "legendFormat": "alloc_bytes_total",
    //                 "refId": "A",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_alloc_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "hide": false,
    //                 "intervalFactor": 2,
    //                 "legendFormat": "allocated",
    //                 "refId": "B",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_buck_hash_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "profiling bucket hash table",
    //                 "refId": "C",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_gc_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "GC metadata",
    //                 "refId": "D",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_heap_alloc_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "heap in-use",
    //                 "refId": "E",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_heap_idle_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "heap idle",
    //                 "refId": "F",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_heap_inuse_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "heap in use",
    //                 "refId": "G",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_heap_released_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "heap released",
    //                 "refId": "H",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_heap_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "heap system",
    //                 "refId": "I",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_mcache_inuse_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "mcache in use",
    //                 "refId": "J",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_mcache_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "mcache sys",
    //                 "refId": "K",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_mspan_inuse_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "mspan in use",
    //                 "refId": "L",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_mspan_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "mspan sys",
    //                 "refId": "M",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_next_gc_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "heap next gc",
    //                 "refId": "N",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_other_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "other sys",
    //                 "refId": "O",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_stack_inuse_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "stack in use",
    //                 "refId": "P",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_stack_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "stack sys",
    //                 "refId": "Q",
    //                 "step": 10
    //               },
    //               {
    //                 "expr": "sum(go_memstats_sys_bytes{job=~\"$job\", instance=~\"$instance\"})",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "sys",
    //                 "refId": "R",
    //                 "step": 10
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Go Memory Usage (FIXME)",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "bytes",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 9,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 3,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "prometheus_target_interval_length_seconds{instance=~\"$instance\", job=~\"$job\"}",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{quantile}} {{interval}}",
    //                 "refId": "A",
    //                 "step": 20
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Scrape Duration",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Seconds",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           },
    //           {
    //             "aliasColors": {},
    //             "bars": false,
    //             "dashLength": 10,
    //             "dashes": false,
    //             "datasource": "${DS_THEMIS}",
    //             "fill": 1,
    //             "id": 7,
    //             "legend": {
    //               "avg": false,
    //               "current": false,
    //               "max": false,
    //               "min": false,
    //               "show": true,
    //               "total": false,
    //               "values": false
    //             },
    //             "lines": true,
    //             "linewidth": 1,
    //             "links": [],
    //             "nullPointMode": "null",
    //             "percentage": false,
    //             "pointradius": 5,
    //             "points": false,
    //             "renderer": "flot",
    //             "seriesOverrides": [],
    //             "spaceLength": 10,
    //             "span": 3,
    //             "stack": false,
    //             "steppedLine": false,
    //             "targets": [
    //               {
    //                 "expr": "sum(rate(prometheus_target_interval_length_seconds_count{job=~\"$job\",instance=~\"$instance\"}[5m])) by (interval)",
    //                 "format": "time_series",
    //                 "intervalFactor": 2,
    //                 "legendFormat": "{{interval}}",
    //                 "refId": "A",
    //                 "step": 20
    //               }
    //             ],
    //             "thresholds": [],
    //             "timeFrom": null,
    //             "timeShift": null,
    //             "title": "Target Scrapes / 5m",
    //             "tooltip": {
    //               "shared": true,
    //               "sort": 0,
    //               "value_type": "individual"
    //             },
    //             "type": "graph",
    //             "xaxis": {
    //               "buckets": null,
    //               "mode": "time",
    //               "name": null,
    //               "show": true,
    //               "values": []
    //             },
    //             "yaxes": [
    //               {
    //                 "format": "short",
    //                 "label": "Scrapes",
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": "0",
    //                 "show": true
    //               },
    //               {
    //                 "format": "short",
    //                 "label": null,
    //                 "logBase": 1,
    //                 "max": null,
    //                 "min": null,
    //                 "show": true
    //               }
    //             ]
    //           }
    //         ],
    //         "repeat": null,
    //         "repeatIteration": null,
    //         "repeatRowId": null,
    //         "showTitle": false,
    //         "title": "Broken, ignore",
    //         "titleSize": "h6"
    //       }
    //     ],
    //     "schemaVersion": 14,
    //     "style": "dark",
    //     "tags": [],
    //     "templating": {
    //       "list": [
    //         {
    //           "allValue": null,
    //           "current": {},
    //           "datasource": "${DS_THEMIS}",
    //           "hide": 0,
    //           "includeAll": true,
    //           "label": null,
    //           "multi": true,
    //           "name": "job",
    //           "options": [],
    //           "query": "query_result(prometheus_tsdb_head_samples_appended_total)",
    //           "refresh": 2,
    //           "regex": "/.*job=\"([^\"]+)/",
    //           "sort": 1,
    //           "tagValuesQuery": "",
    //           "tags": [],
    //           "tagsQuery": "",
    //           "type": "query",
    //           "useTags": false
    //         },
    //         {
    //           "allValue": null,
    //           "current": {},
    //           "datasource": "${DS_THEMIS}",
    //           "hide": 0,
    //           "includeAll": true,
    //           "label": null,
    //           "multi": true,
    //           "name": "instance",
    //           "options": [],
    //           "query": "query_result(up{job=~\"$job\"})",
    //           "refresh": 2,
    //           "regex": "/.*instance=\"([^\"]+).*/",
    //           "sort": 0,
    //           "tagValuesQuery": "",
    //           "tags": [],
    //           "tagsQuery": "",
    //           "type": "query",
    //           "useTags": false
    //         },
    //         {
    //           "allValue": null,
    //           "current": {
    //             "selected": true,
    //             "text": "1h",
    //             "value": "1h"
    //           },
    //           "hide": 0,
    //           "includeAll": false,
    //           "label": null,
    //           "multi": false,
    //           "name": "interval",
    //           "options": [
    //             {
    //               "selected": true,
    //               "text": "1h",
    //               "value": "1h"
    //             },
    //             {
    //               "selected": false,
    //               "text": "3h",
    //               "value": "3h"
    //             },
    //             {
    //               "selected": false,
    //               "text": "6h",
    //               "value": "6h"
    //             },
    //             {
    //               "selected": false,
    //               "text": "12h",
    //               "value": "12h"
    //             },
    //             {
    //               "selected": false,
    //               "text": "1d",
    //               "value": "1d"
    //             },
    //             {
    //               "selected": false,
    //               "text": "2d",
    //               "value": "2d"
    //             },
    //             {
    //               "selected": false,
    //               "text": "7d",
    //               "value": "7d"
    //             },
    //             {
    //               "selected": false,
    //               "text": "30d",
    //               "value": "30d"
    //             },
    //             {
    //               "selected": false,
    //               "text": "90d",
    //               "value": "90d"
    //             },
    //             {
    //               "selected": false,
    //               "text": "180d",
    //               "value": "180d"
    //             }
    //           ],
    //           "query": "1h, 3h, 6h, 12h, 1d, 2d, 7d, 30d, 90d, 180d",
    //           "type": "custom"
    //         }
    //       ]
    //     },
    //     "time": {
    //       "from": "now-30m",
    //       "to": "now"
    //     },
    //     "timepicker": {
    //       "refresh_intervals": [
    //         "5s",
    //         "10s",
    //         "30s",
    //         "1m",
    //         "5m",
    //         "15m",
    //         "30m",
    //         "1h",
    //         "2h",
    //         "1d"
    //       ],
    //       "time_options": [
    //         "5m",
    //         "15m",
    //         "1h",
    //         "6h",
    //         "12h",
    //         "24h",
    //         "2d",
    //         "7d",
    //         "30d"
    //       ]
    //     },
    //     "timezone": "",
    //     "title": "Prometheus 2.0 Overview",
    //     "version": 21
    //   }

    //   // Make a POST request to import the dashboard
    //   const response = await axios.post('http://localhost:3000/api/dashboards/import', dashboardJson, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': 'http://localhost:7070',
    //       mode: 'no-cors',
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //   });

    //   // Do something with the response if needed
    //   console.log('Dashboard imported successfully:', response.data);
    // } catch (error) {
    //   console.error('Error importing Grafana dashboard:', error);
    //   // Handle the error appropriately (e.g., show an error message to the user)
    // }

    // // Add your logic to send the data to the server or perform any other actions
    console.log('API URL:', apiUrl);
    console.log('Dashboard Name:', dashboardName);
  };

  return (
    <div className="registerContainer">
      <Navigation />
      <div className='content'>
        <h1>Register Your K8s cluster</h1>
        <form className="content" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="API URL"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
          /> <br/>
          <input
            type="text"
            placeholder="Dashboard Name"
            value={dashboardName}
            onChange={(e) => setDashboardName(e.target.value)}
          /> <br/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default DBaordCreate;
