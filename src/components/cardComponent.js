import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Grid } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
const extra=(movie,deleteMovie)=>{
        return(
                <div>
                          <Button animated as={Link} to={`/movie/${movie._id}`} >
                                <Button.Content visible>Edit</Button.Content>
                                <Button.Content hidden>
                                        <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                           <Button animated='vertical' floated='right' onClick={()=>deleteMovie(movie._id)}>
                                <Button.Content hidden>Delete</Button.Content>
                                <Button.Content visible>
                                        <Icon name='trash' />
                                </Button.Content>
                          </Button>
                </div>
        )
}

const CardComponent = ({movie,deleteMovie}) => (
            <Grid.Column>
                    <Card
                            image={movie.cover}
                            header={movie.title}
                            extra={extra(movie,deleteMovie)}
                    />
            </Grid.Column>
)

export default CardComponent