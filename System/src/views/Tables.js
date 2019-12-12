import React from "react";
import { Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import { Form, Upload, message, Button, Icon } from 'antd';

const { Dragger } = Upload;


const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Materials" subtitle="Resource" className="text-sm-left" />
    </Row>


      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>


  </Container>
);

export default Tables;
