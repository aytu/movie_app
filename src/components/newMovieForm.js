import React, { Component } from 'react'
import ValidationMessage from './validationMessage';
import { Button, Form ,Image,Input} from 'semantic-ui-react'
import { Redirect } from 'react-router';
class NewMovieForm extends Component {
    state={
        title: this.props.movie ? this.props.movie.title :  "",
        cover: this.props.movie ? this.props.movie.cover :  "",
        initialtitle: this.props.movie ? this.props.movie.title :  "", 
        initialcover: this.props.movie ? this.props.movie.cover :  "",
        _id: this.props.movie ? this.props.movie._id :  "",
        errors:{},
        pageredirect:false
    }

   handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       });
   }
   validate=()=>{     
     const errors={};
      const {title,cover}=this.state;
      if(title===""){
         errors.title="Title can't be empty"
      }
      if(cover===""){
        errors.cover="Cover can't be empty"
     }
     this.setState({errors});
     return errors;
   }
   static getDerivedStateFromProps(nextProps, prevState){ 
    //console.log(nextProps);
    //console.log(prevState);
     if(nextProps.movie.title!==prevState.initialtitle || nextProps.movie.cover!==prevState.initialcover ){
      console.log('changed');
       return ({
         initialtitle :nextProps.movie.title,
         initialcover: nextProps.movie.cover,
         title: nextProps.movie.title,
         cover: nextProps.movie.cover,
         _id:nextProps.movie._id
       })
     }
     return null;
   }
 
   onSubmit=()=>{
     const errors= this.validate();
     if(Object.keys(errors).length===0){
       this.setState({pageredirect:true});
       if(this.state._id) // || this.props.match.params._id
         this.props.onUpdateNewMovie(this.state);
       else 
         this.props.onAddNewMovie(this.state);

      
     }
       
   }
    render() {
  
        const { errors }=this.state
        const srcval=this.state.cover ? this.state.cover : "https://react.semantic-ui.com/images/wireframe/white-image.png";
      
        const form=(<Form onSubmit={this.onSubmit} loading={this.props.fetching || this.props.movie.fetching }>
        <Form.Field  error={!!errors.title}>
          <label>Title</label>
          <ValidationMessage message={errors.title}/>
          <Input
            error={!!errors.title}
            id="title"
            name="title"
            value={this.state.title || ''}
            onChange={this.handleChange}
            placeholder='Title' />
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover</label>
          <ValidationMessage message={errors.cover}/>
          <Input                
             id="cover"
             name="cover"
             value={this.state.cover || ''}
             onChange={this.handleChange}
            placeholder='Cover' />
        </Form.Field>           

        <Image src={ srcval }  size='medium' bordered />
        {/* <div className="clarify"></div> */}
        <Button type='submit' style={{marginTop:"10px"}}>Submit</Button>
      </Form>);
        return (
          
            (this.props.done || ( this.state._id && this.props.doneUpdate )) && this.state.pageredirect ?  <Redirect to='/movies'/> : form
         
        )
    }
}
export default NewMovieForm;