import React from "react";
import Tag from "antd/lib/tag";
import "antd/lib/tag/style/css";

const statusMap = {
  complete: <Tag color="green">Open</Tag>,
  inProgress: <Tag color="orange">Closed</Tag>
};

export const StatusTag = ({ status }) => statusMap[status];
