import { Modal, Button, Form } from 'semantic-ui-react';

import EntryForm from './EntryForm';

const ModalEdit = ({ isOpen, setIsOpen, setDescription, description, value, setValue, isExpense, setIsExpense }) => {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form unstackable>
                        <EntryForm 
                            description={description} 
                            setDescription={setDescription} 
                            value={value} 
                            setValue={setValue} 
                            isExpense={isExpense}
                            setIsExpense={setIsExpense} 
                        />
                    </Form>
                    
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={setIsOpen.bind(null, false)} primary>Save</Button>
                <Button onClick={setIsOpen.bind(null, false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
