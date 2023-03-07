import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from 'react-simple-maps';

const Map = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-120.0, -42.0, 0],
        center: [5, -3],
        scale: 2000,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies
        geography='/features.json'
        fill='#2C065D'
        stroke='#FFFFFF'
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[126.8522, 37.3566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text x='-8' textAnchor='end' alignmentBaseline='middle' fill='white'>
          {'Paju'}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
