import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import "../components/FilterTable/styles.css";
import { EventsSection } from "../components/FilterTable/EventsSection";

const ComponentsOverview = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Courses"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      <div className="App">
        <EventsSection />
      </div>

    </Container>
  </div>
);

export default ComponentsOverview;
