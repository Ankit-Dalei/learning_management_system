const login = async (username, password) => {
  try {
    const response = await fetch('http://localhost:8181/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "usernameOrEmail": username,
        "password": password
    }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return { success: true, role: data.role };
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: 'An error occurred while logging in' };
  }
};

export { login };
