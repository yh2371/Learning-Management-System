import React from 'react';
//import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
//import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';

import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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

//const apiOptions = {
  //...connectorNodeV1.apiOptions,
  //apiRoot: `http://opuscapita-filemanager-demo-master.azurewebsites.net/` // Or you local Server Node V1 installation.
//};

const Manager = () => (
    //<div>
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


    //<div style={{ height: '480px' }}>
    //<FileManager>
      //  <FileNavigator
      //  id="filemanager-1"
      //  api={connectorNodeV1.api}
      //  apiOptions={apiOptions}
      //  capabilities={connectorNodeV1.capabilities}
    //    listViewLayout={connectorNodeV1.listViewLayout}
    //    viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
        ///>
    //</FileManager>
    //</div>
    //</div>
);

export default Manager;
