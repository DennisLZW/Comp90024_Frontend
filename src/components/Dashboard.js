import { useState,useEffect } from 'react';
import { FetchData } from './Fetchdata';
import axios from 'axios';
import React from "react";
import ReactECharts from 'echarts-for-react';
import { useNavigate } from 'react-router-dom';
import './custom-popup.css';

import PieChart from './Pichart';
import LineChart from './Linechart';
import BarChart from './Barchart';
import HeatmapChart from './heatchart';
import BarChart1 from './Barchart1';
import LineChart_State from './Linechart_state';
import LineChart_State_income from './Linechart_state_income';


import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import { statesData } from './melbourne_sydney_canberra';
import { Australia_state } from './australian-states';



function Dashboard() {
  const [selectedChartType, setSelectedChartType] = useState(null);

  const [fetchedData1, setFetchedData1] = useState(null);
  const [fetchedData2, setFetchedData2] = useState(null);

  const [fetchedData, setFetchedData] = useState(null);
  const [showPieChart, setShowPieChart] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const [chartType, setChartType] = useState(null);
  const navigate = useNavigate();
  const center = [-37.80011643182056, 144.96206856065965];


  const handleClick_state_income = async () => {
    getAllDataAndDraw_income();
    setSelectedChartType('income');
  }

  const getAllDataAndDraw_income = async () => {
    const url_income_Vic = `http://172.26.134.0/houserental/state_income/Victoria/`;
    const data_income_Vic = await FetchData(url_income_Vic);

    const url_income_SA = `http://172.26.134.0/houserental/state_income/South%20Australia/`;
    const data_income_SA = await FetchData(url_income_SA);

    const url_income_NSW = `http://172.26.134.0/houserental/state_income/New%20South%20Wales/`;
    const data_income_NSW = await FetchData(url_income_NSW);

    const url_income_TA = `http://172.26.134.0/houserental/state_income/Tasmania/`;
    const data_income_TA = await FetchData(url_income_TA);

    const url_income_QL = `http://172.26.134.0/houserental/state_income/Queensland/`;
    const data_income_QL = await FetchData(url_income_QL);

    const url_income_NT = `http://172.26.134.0/houserental/state_income/Northern%20Territory/`;
    const data_income_NT = await FetchData(url_income_NT);

    const url_income_WA = `http://172.26.134.0/houserental/state_income/Western%20Australia/`;
    const data_income_WA = await FetchData(url_income_WA);


    setFetchedData2({
      income_SA: data_income_SA,
      income_vic: data_income_Vic,
      income_NSW: data_income_NSW,
      income_TA: data_income_TA,
      income_QL: data_income_QL,
      income_NT: data_income_NT,
      income_WA: data_income_WA,
    });

  }
  

  const handleClick_state = async () => {
    getAllDataAndDraw();
    setSelectedChartType('rent');
  }

  const getAllDataAndDraw = async () => {
    const url_rent_Vic = `http://172.26.134.0/houserental/state_rent/Victoria/`;
    const data_line_Vic = await FetchData(url_rent_Vic);

    const url_rent_SA = `http://172.26.134.0/houserental/state_rent/South%20Australia/`;
    const data_line_SA = await FetchData(url_rent_SA);

    const url_rent_NSW = `http://172.26.134.0/houserental/state_rent/New%20South%20Wales/`;
    const data_line_NSW = await FetchData(url_rent_NSW);

    const url_rent_TA = `http://172.26.134.0/houserental/state_rent/Tasmania/`;
    const data_line_TA = await FetchData(url_rent_TA);

    const url_rent_QL = `http://172.26.134.0/houserental/state_rent/Queensland/`;
    const data_line_QL = await FetchData(url_rent_QL);

    const url_rent_NT = `http://172.26.134.0/houserental/state_rent/Northern%20Territory/`;
    const data_line_NT = await FetchData(url_rent_NT);

    const url_rent_WA = `http://172.26.134.0/houserental/state_rent/Western%20Australia/`;
    const data_line_WA = await FetchData(url_rent_WA);


    setFetchedData1({
      rent_SA: data_line_SA,
      rent_vic: data_line_Vic,
      rent_NSW: data_line_NSW,
      rent_TA: data_line_TA,
      rent_QL: data_line_QL,
      rent_NT: data_line_NT,
      rent_WA: data_line_WA,
    });

  }


  const handleClick = async (feature) => {
    const name = feature.properties.STATE_NAME || feature.properties.name;

    const url_pie = `http://172.26.134.0/houserental/location_deposit/${name}/`;
    const data_pie = await FetchData(url_pie);

    const url_line = `http://172.26.134.0/houserental/location_income/${name}/`;
    const data_line = await FetchData(url_line);

    const url_bar =  `http://172.26.134.0/houserental/location_rent/${name}/`;
    const data_bar = await FetchData(url_bar);

    const url_heat = `http://172.26.134.0/houserental/location_unemploy/${name}/`;
    const data_heat = await FetchData(url_heat);


    setFetchedData({
      pieData: data_pie,
      lineData: data_line,
      barData: data_bar,
      heatData: data_heat,
      
    });
    setSelectedFeature(feature);
    setShowPieChart(true);
  }

  const closePieChart = () => {
    setShowPieChart(false);
    setFetchedData(null);
    setSelectedFeature(null);
  }

  const handleChartTypeChange = (type) => {
    setChartType(type);
  }

  const renderChart = () => {
    switch (chartType) {
      case 'pie':
        return fetchedData && <PieChart data={fetchedData.pieData.content} />;
      case 'line':
        return fetchedData && <BarChart1 data={fetchedData.lineData.content} />;
      case 'bar':
        return fetchedData && <BarChart data={fetchedData.barData.content} />;
      case 'heat':
        return fetchedData && <LineChart data={fetchedData.heatData.content} />;
      default:
        return null;
    }
  }




  const renderPolygon = (coordinates, feature) => {
    return (
      <Polygon 
        fillColor='#FD8D3C'
        fillOpacity={0.7}
        weight={2}
        opacity={1} 
        dashArray='3'
        color='blue'
        positions={coordinates}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillOpacity: 0.7,
              weight: 5,
              dashArray: '3',
              color: '#666',
              fillColor: '#FACDCC'
            });
          },
          mouseout: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillOpacity: 0.7,
              weight: 2,
              dashArray: '3',
              color: 'white',
              fillColor: '#FD8D3C'
            });
          },
          click: () => handleClick(feature),
        }}
      >
        <Popup>
          <div>
            <h2>{feature.properties.STATE_NAME}</h2>
          </div>
        </Popup>
      </Polygon>
    );
  }

  return (
    <div>
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer 
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=QYkdVzCP9R8AmF2ME0DC"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {Australia_state.features.map((feature) => {
          if (feature.geometry.type === 'Polygon') {
            const coordinates = feature.geometry.coordinates[0].map((item) => [item[1],item[0]]);
            return renderPolygon(coordinates, feature);
          } else if (feature.geometry.type === 'MultiPolygon') {
            return feature.geometry.coordinates.map((polygon) => {
              const coordinates = polygon[0].map((item) => [item[1], item[0]]);
              return renderPolygon(coordinates, feature);
            });
          }
        })}
        {statesData.features.map((feature) => {
          if (feature.geometry.type === 'Polygon') {
            const coordinates = feature.geometry.coordinates[0].map((item) => [item[1],item[0]]);
            return (
              <Polygon 
                fillColor='#0066FF'
                fillOpacity={0.7}
                weight={2}
                opacity={1} 
                dashArray='3'
                color='blue'
                positions={coordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 5,
                      dashArray: '3',
                      color: '#666',
                      fillColor: '#FACDCC'
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: '3',
                      color: 'white',
                      fillColor: '#0066FF'
                    });
                  },
                  click: () => handleClick(feature),
                }}
              >
                
              </Polygon>
            );
          } else if (feature.geometry.type === 'MultiPolygon') {
            return feature.geometry.coordinates.map((polygon) => {
              const coordinates = polygon[0].map((item) => [item[1], item[0]]);
              return (
                <Polygon 
                  fillColor='#0066FF'
                  fillOpacity={0.7}
                  weight={2}
                  opacity={1} 
                  dashArray='3'
                  color='blue'
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 5,
                        dashArray: '3',
                        color: '#666',
                        fillColor: '#FACDCC'
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: '3',
                        color: 'white',
                        fillColor: '#0066FF'
                      });
                    },
                    click: () => handleClick(feature),
                  }}
                >
                  
                </Polygon>
              );
            });
          }
        })}
      </MapContainer>

      {/* {showPieChart && (
        <div className="chartContainer">
          <button className="closeButton" onClick={closePieChart}>Close</button>
          <h2 className="chartTitle" style={{ textAlign: 'center' }}>
            {selectedFeature && (selectedFeature.properties.name || selectedFeature.properties.STATE_NAME)}
          </h2>

          <div className="chartButtons">
            <button className={chartType === 'pie' ? 'active' : ''} onClick={() => handleChartTypeChange('pie')}>Mortgage repayment</button>
            <button className={chartType === 'line' ? 'active' : ''} onClick={() => handleChartTypeChange('line')}>Family income</button>
            <button className={chartType === 'bar' ? 'active' : ''} onClick={() => handleChartTypeChange('bar')}>Rental price</button>
            <button className={chartType === 'heat' ? 'active' : ''} onClick={() => handleChartTypeChange('heat')}>Unemployment rate</button>
          </div>

          {renderChart()}

        </div>
      )} */}
      <div className="parentContainer">
        <div className="chartContainer">
          {showPieChart && (
            <>
              <button className="closeButton" onClick={closePieChart}>Close</button>
              <h2 className="chartTitle" style={{ textAlign: 'center' }}>
                {selectedFeature && (selectedFeature.properties.name || selectedFeature.properties.STATE_NAME)}
              </h2>

              <div className="chartButtons">
                <button className={chartType === 'pie' ? 'active' : ''} onClick={() => handleChartTypeChange('pie')}>Mortgage repayment</button>
                <button className={chartType === 'line' ? 'active' : ''} onClick={() => handleChartTypeChange('line')}>Family income</button>
                <button className={chartType === 'bar' ? 'active' : ''} onClick={() => handleChartTypeChange('bar')}>Rental price</button>
                <button className={chartType === 'heat' ? 'active' : ''} onClick={() => handleChartTypeChange('heat')}>Unemployment rate</button>
              </div>

              {renderChart()}
            </>
          )}
        </div>
        <div className="emptyArea">
          <button className="button-style" onClick={handleClick_state}>House rental price distribution by state</button>
          <button className="button-style" onClick={handleClick_state_income}>Family income distribution by state</button>

          {selectedChartType === 'rent' && fetchedData1 && <LineChart_State data={{rent_vic: fetchedData1.rent_vic.content, rent_NT: fetchedData1.rent_NT.content, rent_QL: fetchedData1.rent_QL.content, rent_SA: fetchedData1.rent_SA.content,rent_NSW:fetchedData1.rent_NSW.content,rent_TA:fetchedData1.rent_TA.content,rent_WA:fetchedData1.rent_WA.content}} />}
          {selectedChartType === 'income' && fetchedData2 && <LineChart_State_income data={{income_vic: fetchedData2.income_vic.content, income_NT: fetchedData2.income_NT.content,income_QL: fetchedData2.income_QL.content, income_SA: fetchedData2.income_SA.content,income_NSW:fetchedData2.income_NSW.content,income_TA:fetchedData2.income_TA.content,income_WA:fetchedData2.income_WA.content}} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;