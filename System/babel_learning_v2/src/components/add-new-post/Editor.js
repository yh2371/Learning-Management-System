import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Button} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const PostEditor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" />
        <Button theme="accent">
          <i className="material-icons">file_copy</i> Create New Post
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default PostEditor;
