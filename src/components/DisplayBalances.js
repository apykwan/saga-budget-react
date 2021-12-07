import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
    return (
        <Segment textAlign="cneter">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title="Incomes" value="1000.00" color="green" />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title="Expenses" value="750.00" color="red" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Segment>
    )
}

export default DisplayBalances;