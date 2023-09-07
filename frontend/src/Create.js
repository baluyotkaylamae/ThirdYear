import React, { useState } from 'react'

import axios from 'axios';

const Create = () => {
    const [state, setState] = useState({
      title: '',
      content: '',
      slug: ''
    });
  
    const { title, content, slug } = state;
  
    const handleChange = (name) => (event) => {
      setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Send the form data to your server using axios or another HTTP library
        axios
          .post('http://localhost:8000/api/post', {
            title,
            content,
            slug
          })
          .then((response) => {
            // Handle the response from the server if needed
            console.log('Post created successfully:', response.data);
    
            // Optionally, reset the form inputs to their initial state
            setState({
              title: '',
              content: '',
              slug: ''
            });
          })
          .catch((error) => {
            console.error('Error creating post:', error);
          });
      };

    return (
        <div>
            <h1>Create Post</h1>
            <br/>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className='text-muted'>Title</label>
                    <input type="text" 
                    className='form-control' 
                    placeholder='Post Title' required
                    onChange={handleChange('title')} 
                    value={title}
                    />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Content</label>
                    <textarea type="text" 
                    className='form-control' 
                    placeholder='Write Something...' required 
                    onChange={handleChange('content')} 
                    value={content}
                    />
                </div>
                <div className="form-group">
                    <label className='text-muted'>Slug</label>
                    <input type="text" 
                    className='form-control' 
                    placeholder='Slug' required 
                      onChange={handleChange('slug')} 
                      value={slug}/>
                </div>
                <div>
                    <button className='btn btn-primary' type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create