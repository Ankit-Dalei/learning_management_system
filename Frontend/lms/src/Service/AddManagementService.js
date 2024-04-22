const addmt = async (name, email, password, universityname, phone) => {
    try {
      const requestBody = {
        "mtName": name,
        "mtEmail": email,
        "mtPasswd": password,
        "mtPhone": phone,
        "universityName": universityname
      };
  
      const response = await fetch('http://localhost:8181/cutm/mangement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
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
  
  export { addmt };
  