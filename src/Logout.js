import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Optional: Send a logout request to your backend
        await fetch('http://localhost:3001/logout', {
          method: 'GET',
          credentials: 'include',
        });

        // Clear user context
        setUser(null);
        history.push('/'); // Redirect to the main dashboard
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logoutUser();
  }, [setUser, history]);

  return null; // This component doesn't render anything
};

export default Logout;
