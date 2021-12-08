import React from 'react';

import EntryLine from './EntryLine';

const EntryLines = ({ entries, deleteEntry, editEntry, setIsOpen }) => {
    return (
        <div>
            {entries.map(entry => (
                <EntryLine
                    key={entry.id}
                    setIsOpen={setIsOpen}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                    {...entry}
                />
            ))}
        </div>
    );
}

export default EntryLines;
