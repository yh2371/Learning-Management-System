import React from "react";
import Table from "antd/lib/table";
import "antd/lib/table/style/css";
import { Modal, Button } from 'antd';
import "antd/lib/button/style/css";

import { actionService } from "./eventService";
import { StatusTag } from "../StatusTag";

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you want to enroll in this class?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

const EventsTable = ({ eventsData }) => {
  const tableColumns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Level",
      dataIndex: "fileType",
      key: "fileType"
    },
    {
      title: "Duration",
      dataIndex: "process",
      key: "process"
    },
    {
      title: "Instructor",
      dataIndex: "performedBy",
      key: "performedBy"
    },
    {
      title: "Starting Date",
      dataIndex: "updatedAt",
      key: "updatedAt"
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => <StatusTag status={record.status} />
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={showConfirm}>
          Enroll
        </Button>
      )
    }
  ];

  return <Table dataSource={eventsData} columns={tableColumns} />;
};

export { EventsTable };
