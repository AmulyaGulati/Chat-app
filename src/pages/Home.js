import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Grid>
      <Grid fluid className="h-100">
        <Row>
          <Col xs={24} md={8}>
            <Sidebar />
          </Col>
        </Row>
      </Grid>
    </Grid>
  );
};

export default Home;
