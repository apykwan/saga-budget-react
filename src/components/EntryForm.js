import { Fragment } from 'react';
import { Form, Segment, Checkbox } from 'semantic-ui-react';

const EntryForm = ({ value, setValue, description, setDescription, setIsExpense}) => {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input 
                    placeholder="New shinny thing" 
                    icon="tags"
                    label="Description"
                    width={12}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <Form.Input 
                    placeholder="10.00" 
                    icon="dollar"
                    iconPosition="left"
                    label="Value"
                    type="number"
                    step="0.01"
                    width={4}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox 
                    toggle
                    checked 
                    label='Is Expense?' 
                    onChange={() => setIsExpense(oldState => !oldState)}
                />
            </Segment>
        </Fragment>
    )
}

export default EntryForm;
