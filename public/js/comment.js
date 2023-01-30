const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const post = window.location.href
  
    if (content) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post/');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler);
  