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
    } else if (event.target.hasAttribute('data-update-id')) {
        const id = event.target.getAttribute('data-update-id');
        document.location.replace(`/update-post/${id}`);
    }
  };

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);