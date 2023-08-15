import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowUser = () => {
    const { userId } = useParams(); // Get user ID from URL
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Function to fetch user details by ID
    const fetchUser = async () => {
      try {
        // Replace with the appropriate API endpoint to fetch user details
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setLoading(false);
      }
    };
  
    // Fetch user details when the component mounts
    useEffect(() => {
      fetchUser();
    }, [userId]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user) {
      return <div>User not found</div>;
    }
  
    // Render user details
    return (
      <div>
        <h1>{user.username}</h1>
        <p>Email: {user.email}</p>
        {/* You can add more details here based on the user schema */}
      </div>
    );
  };
  
  export default ShowUser;
  