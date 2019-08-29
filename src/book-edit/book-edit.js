import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BASE_URL} from '../constants/api';
import './book-edit.css';

export class BookEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`${BASE_URL}/book/${id}`)
      .then(response => {
        return response.json();
      })
      .then(book => {
        this.setState({
          title: book.title,
          description: book.description
        })
      })
      .catch(error => console.error(error));
  }

  handleChange = fieldName => {
    return event => {
      this.setState({
        [fieldName]: event.target.value
      });
    };
  };

  onSave = () => {
    const id = this.props.match.params.id;

    const formValue = {
      title: this.state.title,
      description: this.state.description
    };

    fetch(`${BASE_URL}/book/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(formValue)
    })
      .then(response => {
        return response.json();
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => console.error(error));
  };

   render() {
    return (
      <div className='book-form-container'>
        <form>
          <h1 className='create-book__title'>Edit Book</h1>

          <div className='field-container'>
            <TextField
              label="Title"
              value={this.state.title}
              fullWidth={true}
              onChange={this.handleChange('title')}
              margin="normal"
            />
          </div>

          <div className='field-container'>
            <TextField
              label="Description"
              fullWidth={true}
              value={this.state.description}
              rows={5}
              multiline
              onChange={this.handleChange('description')}
              margin="normal"
            />
          </div>

          <div className='field-container'>
            <Button onClick={this.onSave} color="primary" variant="contained">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
