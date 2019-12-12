import React from "react";

import PageTitle from "../components/common/PageTitle";
import PostEditor from "../components/add-new-post/Editor";
/* eslint jsx-a11y/anchor-is-valid: 0 */

import {
  Container,
  Row,
  Card,
  CardBody,
  CardFooter,
  Button,
  Modal,
  Collapse
} from "shards-react";

import { Comment, Avatar, Form, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);


const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={3} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button pill outline theme='info' htmlType="submit" loading={submitting} onClick={onSubmit}>
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class AddNewPost extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.viewComments = this.viewComments.bind(this);
    
    this.state = {

      open: false,
      collapse: false,

      // list of comments
      comments: [
        {
          author: 'Lily',
          avatar: require("../images/avatars/3.jpg"),
          content: <p>Wubba lubba dub dub</p>,
          datetime: moment("20190820", "YYYYMMDD").fromNow(),
        },
      ],
      submitting: false,
      value: '',

      // list of posts.
      Posts: [
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Are you desperate to learn a language, or already taking on the challenge, but find it difficult to stay motivated? When your ultimate goal, language fluency, seems months or years away motivation becomes the most important factor during the long haul. \n So here are five inspiring quotes to remind you that learning a foreign language is totally worth the effort. Being bilingual expands your opportunities in life, keeps your brain fit and broadens your perspective. It even gives you a special insight into your own mother tongue and the culture you take for granted. So don’t give up! Every new word is a milestone on your journey to mastering another language.",
          date: "29 February 2019"
        },
      ],

    };
  }


  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  viewComments(){
    this.setState({
      collapse: !this.state.collapse
    })
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { open } = this.state;

    const {
      Posts, comments, submitting, value
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Extra Row of Posts */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Forum" subtitle="Posts" className="text-sm-left" />
          <Button pill onClick={this.toggle} theme='danger' style={{alignSelf: 'flex-end'}}>
            <i className="material-icons">add</i> New Post 
          </Button>
          <Modal open={open} toggle={this.toggle}>
            <PostEditor />
          </Modal>
        </Row>


        {/* List of Posts */}

          {Posts.map((post, idx) => (
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>

                  <Collapse open={this.state.collapse}>
                    <div>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                      avatar={
                        <Avatar
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          alt="Han Solo"
                        />
                      }
                      content={
                        <Editor
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          submitting={submitting}
                          value={value}
                        />
                      }
                    />
                    </div>
                    </Collapse>
                
                </CardBody>

                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        Created by {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                  <Button theme="light" outline pill onClick={this.viewComments}>
                    <i className="material-icons">comment</i> Comments
                  </Button>
                  
                  </div>
                </CardFooter>
              </Card>
          ))}

      </Container>
    );
  }
}


export default AddNewPost;
