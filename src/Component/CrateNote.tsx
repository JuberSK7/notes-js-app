import * as React from 'react';
import { Form, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { Note } from '../Modules/Moduel1';

interface ICrateNoteProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CrateNote: React.FunctionComponent<ICrateNoteProps> = ({ notes, setNotes }) => {
  const [problem, setProblem] = useState<string>("");

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setProblem("All feild are mendotary");
    }

    setProblem("");
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()

    }]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  }
  return (
    <>
      <h2>Create Notes</h2>
      {problem && <Alert variant="danger"> {problem} </Alert>}
      <Form className='mb-3 mt-3' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your plan" ref={titleRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Text</Form.Label>
          <Form.Control placeholder="Enter your plan" as="textarea" rows={3} ref={textRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label htmlFor='colorInput'>Color</Form.Label>
          <Form.Control type="color" id='colorInput' title='choose your BG color' ref={colorRef} />
        </Form.Group>
        <Button type="submit" variant="primary">Create Note</Button>
      </Form>

    </>

  );
};

export default CrateNote;
