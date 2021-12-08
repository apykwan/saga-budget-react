import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEnteries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEnteries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value);
      }
      return totalIncomes += Number(entry.value);
    })
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    setTotal(totalIncomes - totalExpenses)
  }, [entries]);

  function deleteEntry (id) {
    const result = entries.filter(entry => entry.id !== id);
    setEnteries(result);
  }

  function editEntry (id) {
    if (!id) return;
    setIsOpen(true);
    setEntryId(id);
    const index = entries.findIndex(entry => entry.id === id);
    const { description, value, isExpense } = entries[index];
    setDescription(description);
    setValue(value);
    setIsExpense(isExpense);
  }

  function addEntry () {
    if (!description || !value) return;
    const result = entries.concat({
      id: entries.length * Math.floor(Math.random() * 9999) + 1,
      description,
      value,
      isExpense
    });
    setEnteries(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total.toFixed(2)} size="small"/>
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      
      <MainHeader title="history" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} setIsOpen={setIsOpen} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm 
        addEntry={addEntry} 
        description={description} 
        setDescription={setDescription} 
        value={value} 
        setValue={setValue} 
        isExpense={isExpense}
        setIsExpense={setIsExpense} 
      />
      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        description={description} 
        setDescription={setDescription} 
        value={value} 
        setValue={setValue} 
        isExpense={isExpense}
        setIsExpense={setIsExpense} 
      />
    </Container>
  );
}

export default App;

var initialEntries = [
    {
      id: 1,
      description: "Work Income",
      value: 1000,
      isExpense: false
    },
    {
      id: 2,
      description: "Water Bill",
      value: 250,
      isExpense: true
    }
];