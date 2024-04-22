const login = async (username, password) => {
  try {
    const formData = new FormData();
    formData.append('userid', username);
    formData.append('password', password);

    const response = await fetch('http://localhost:8181/user/login', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    // console.log(data.user.userId)
    return { success: true,role: data.user.userId};
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: 'An error occurred while logging in' };
  }
};

export { login };
