const updateFormHandler = async (event) => {
    
    event.preventDefault();
  
    const content = document.querySelector('#update-content').value.trim();
  
    if (content && event.target.hasAttribute('data-update-id')) {
      const id = event.target.getAttribute('data-update-id');
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update post');
      }
    }
};

document
  .querySelector('.form-group')
  .addEventListener('click', updateFormHandler);