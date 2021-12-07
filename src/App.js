import { Container } from 'semantic-ui-react';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="250.00" size="small"/>
      <DisplayBalances />
      
      <MainHeader title="history" type="h3" />
      <EntryLine description="income" value="1000" />
      <EntryLine description="expense" value="750" isExpense />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
