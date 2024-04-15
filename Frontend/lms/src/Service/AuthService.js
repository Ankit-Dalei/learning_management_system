const login = async (username, password) => {
    try {
      return { success: true };
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, error: 'An error occurred while logging in' };
    }
  };
  
  export { login };
  