import { memo } from 'react';
import { useAuth } from '../auth/service/useAuth';

const Profile = () => {
      const { getProfile} = useAuth();
    const {isError, data: user } = getProfile();
  return (
    <div className="Profile">

    </div>
  );
};

export default memo(Profile);