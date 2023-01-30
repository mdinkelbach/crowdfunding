const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-update-id')) {
      const id = event.target.getAttribute('data-update-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update project');
      }
    }
    console.log('update')
    document.location.replace('/update-post')
  };

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', updateButtonHandler);