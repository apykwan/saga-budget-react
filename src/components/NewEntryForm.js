import React from 'react';
import { Form } from 'semantic-ui-react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input 
            placeholder="New shinny thing" 
            icon="tags"
            label="Description"
            width={12}
          />
          <Form.Input 
            placeholder="10.00" 
            icon="dollar"
            iconPosition="left"
            label="Value"
            width={4}
          />
        </Form.Group>
        <ButtonSaveOrCancel />
      </Form>
    )
}

export default NewEntryForm;
