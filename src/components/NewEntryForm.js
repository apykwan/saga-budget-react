import { Form } from 'semantic-ui-react';

import EntryForm from './EntryForm';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = ({ addEntry, setDescription, description, value, setValue, isExpense, setIsExpense }) => {
  return (
    <Form unstackable>
      <EntryForm description={description} setDescription={setDescription} value={value} setValue={setValue} setIsExpense={setIsExpense} />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  )
}

export default NewEntryForm;
