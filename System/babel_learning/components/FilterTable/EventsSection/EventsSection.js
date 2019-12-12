import React, { Component } from "react";

import styles from "./style.module.css";
import { EventsTable } from "../EventsTable";
import { StatusFilter } from "../StatusFilter";
import { TitleSearch } from "../TitleSearch";

const eventsData = [
  {
    key: 1,
    title: "Italian",
    fileType: "Elementary",
    process: "14 Weeks",
    performedBy: "Denise Etridge",
    operationNote: "-",
    updatedAt: "26/09/2020",
    status: "complete"
  },
  {
    key: 2,
    title: "French",
    fileType: "Intermediate",
    process: "7 Weeks",
    performedBy: "Dane Gill",
    operationNote: "passed",
    updatedAt: "21/09/2020",
    status: "inProgress"
  },
  {
    key: 3,
    title: "Chinese",
    fileType: "Elementary",
    process: "14 Weeks",
    performedBy: "Jay Wong",
    operationNote: "-",
    updatedAt: "26/09/2020",
    status: "complete"
  },
  {
    key: 4,
    title: "Spanish",
    fileType: "Intermediate",
    process: "14 Weeks",
    performedBy: "Jose Gomez",
    operationNote: "passed",
    updatedAt: "21/09/2020",
    status: "complete"
  }
  
];

class EventsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData
    };
  }

  handleFilter = key => {
    const selected = parseInt(key);
    if (selected === 3) {
      return this.setState({
        eventsData
      });
    }

    const statusMap = {
      1: "complete",
      2: "inProgress"
    };

    const selectedStatus = statusMap[selected];

    const filteredEvents = eventsData.filter(
      ({ status }) => status === selectedStatus
    );
    this.setState({
      eventsData: filteredEvents
    });
  };

  handleSearch = searchText => {
    const filteredEvents = eventsData.filter(({ title }) => {
      title = title.toLowerCase();
      return title.includes(searchText);
    });

    this.setState({
      eventsData: filteredEvents
    });
  };

  render() {
    return (
      <section className={styles.container}>
        <header className={styles.header}>
          <StatusFilter
            filterBy={this.handleFilter}
            className={styles.action}
          />
          <TitleSearch onSearch={this.handleSearch} className={styles.action} />
        </header>
        <EventsTable eventsData={this.state.eventsData} />
      </section>
    );
  }
}

export { EventsSection };
