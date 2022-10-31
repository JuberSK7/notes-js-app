import React, { useState } from 'react';
import Header from './Component/Header';
import { Note } from './Modules/Moduel1';
import ListCreate from './Component/ListCreate'
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import CrateNote from './Component/CrateNote';

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Party",
    text: "Sunday Party shedules",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <ListCreate notes={notes} setNotes={setNotes} />
          </Col>
        </Row>

        <Row>
          <Col>
            <CrateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
