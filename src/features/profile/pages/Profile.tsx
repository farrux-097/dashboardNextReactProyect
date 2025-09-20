import { memo } from 'react';
import { useAuth } from '../../auth/service/useAuth';
import { Button } from 'antd';

const Profile = () => {

    const { getProfile } = useAuth()

    const { data } = getProfile()

    const maplashga = data?.data

    console.log(data?.data);




    return (
        <div className="Profile">
            <div className="">
                <Button>Update</Button>

                {maplashga &&
                    <div key={maplashga.id}>
                        <h1>{maplashga.fname}</h1>
                        <h1>{maplashga.lname}</h1>
                        <p>{maplashga.email}</p>
                        <p>{maplashga?.address}</p>
                        <p>{maplashga.id}</p>
                    </div>
                }


            </div>
        </div>
    );
};

export default memo(Profile);