import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ incomeTotal, expenseTotal }) => {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title="Incomes" value={incomeTotal.toFixed(2)} color="green" />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title="Expenses" value={expenseTotal.toFixed(2)} color="red" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Segment>
    )
}

export default DisplayBalances;