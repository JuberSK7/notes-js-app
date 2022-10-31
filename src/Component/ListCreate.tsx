import * as React from 'react';
import { Note } from '../Modules/Moduel1';
import Notes from '../Component/Notes';
import { setSyntheticLeadingComments } from 'typescript';

interface IListCreateProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const ListCreate: React.FC<IListCreateProps> = ({ notes, setNotes }) => {

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));

  }

  const renderNotes = (): JSX.Element[] => {
    return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />
    })
  }
  return (
    <>
      <h2 className='mt-3'>Notes Likho</h2>
      <div>
        {renderNotes()}
      </div>
    </>
  );
}

export default ListCreate;