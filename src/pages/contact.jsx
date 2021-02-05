import React from "react";
import { Card, Row, Col } from "antd";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibW9oYW1tYWRtYXNvIiwiYSI6ImNrYmFqdWJxNDA2NGwyem4zbjRtcGN5YWkifQ.WtmnjhRsLiqMPNYawpbqQA'
  });





export default function contact() {

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <Card hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop:"1rem"}}>
        <Col span={12}>
          <Map
  style="mapbox://styles/mohammadmaso/ckks6it6q0wc917lbzliqeug1"
  containerStyle={{
    height: '400px',
    padding: "0"
  }}
  center={[51.4482906,35.7407193]}
  zoom={[15]}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[51.4482906,35.7407193]}/>
  </Layer>
</Map>
        </Col>
      </Row>
    </>
  );
}
