import { Button, Link } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';
import getTeam from '../api/teamData';

function Home() {
  const [team, setTeam] = useState([]);
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getTheTeam = () => {
    getTeam(user.uid).then(setTeam);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getTheTeam();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/new" passHref>
        <Button>Add A Member</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over members here using MemberCard component */}
        {team.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} />
        ))}
      </div>

    </div>
  );
}

export default Home;
