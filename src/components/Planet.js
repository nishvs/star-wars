import React from 'react'
import { Grid } from 'semantic-ui-react';

export default function Planet({data}) {
    return (
        <div>
            <p>Planet</p>
            <Grid columns={3}>
                {data && data.map((p,i) => {
                        if(p.residents.length > 0 ){
                            return (
                                <Grid.Column key={i}>
                                    <p>{p.name}</p>                                                           
                                </Grid.Column>)
                        } else{
                            return null;
                        }
                }
                )}                        
            </Grid>
        </div>
    )
}
