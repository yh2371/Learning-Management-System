/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button,
  Modal, ModalBody, ModalHeader
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {

      open: false,

      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/events-01.png"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Workshop | Intro to Swahali 101 ",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019",
          open: false
        },
        {
          backgroundImage: require("../images/content-management/events-02.png"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
          open: false
        },
        {
          backgroundImage: require("../images/content-management/events-03.png"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
          open: false
        },

      ],

      // Third list of posts.
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Had denoting properly jointure which well books beyond",
          body:
            "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Husbands ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        }
      ],

      // Fourth list of posts.
      PostsListFour: [
        {
          backgroundImage: require("../images/content-management/flags-01.png"),
          author: "Alene Trenton",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Spanish 101",
          body:
            "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/flags-02.png"),
          author: "Chris Jamie",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "French 102",
          body:
            "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/flags-03.png"),
          author: "Monica Jordan",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "German 202",
          body:
            "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/flags-04.png"),
          author: "Monica Jordan",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Italian 202",
          body:
            "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
          date: "29 February 2019"
        }
      ]
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;

    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Extra Row of Posts */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Events" subtitle="Recent" className="text-sm-left" />
        </Row>
        
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
              <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                <CardBody>
                  <h4 className="card-title">{post.title}</h4>
                </CardBody>
                <Button 
                    pill float
                    theme='success'
                    className={`card-post__category`}
                    style={{marginLeft:10, marginBottom:10}}
                    onClick={this.toggle}
                  >
                    M O R E
                </Button>
                <Modal open={open} toggle={this.toggle}>
                  <ModalHeader>Header</ModalHeader>
                  <ModalBody>👋 Hello there!</ModalBody>
                </Modal>
                </div>
                <CardFooter className="border-top d-flex">
                  <span className="text-muted">{post.date}</span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Fourth Row of posts */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Courses" subtitle="Components" className="text-sm-left" />
        </Row>
        <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                />
                <CardBody>
                  <h5 className="card-title text-center">
                    <a className="text-fiord-blue" href="#" onClick={this.toggle}>
                      {post.title}
                    </a>
                  </h5>
                  <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Header</ModalHeader>
                    <ModalBody> Hello there!</ModalBody>
                  </Modal>
                  <p className="card-text text-center">{post.body}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
