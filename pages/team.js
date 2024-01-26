import { useState, useEffect } from 'react';
import { getTeam } from '../api/teamData';
// import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  // const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getTheTeam = () => {
    getTeam().then(setTeam);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getTheTeam();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over members here using MemberCard component */}
        {team.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getTheTeam} />
        ))}
      </div>

    </div>
  );
}
