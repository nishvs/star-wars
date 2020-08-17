import React from 'react'
import { Grid } from 'semantic-ui-react';

export default function People({data}) {
    return (
        <div>
            <h1>People</h1>
            <Grid columns={3}>
                {data && data.map((p,i) => {
                    return (
                        <Grid.Column key={i}>
                            <p>{p.name}</p>
                                    <strong>Height</strong>
                                    <p>{p.height}</p>                                                            
                        </Grid.Column>
                    )
                }
                )}
            </Grid>
        </div>
    )
}
