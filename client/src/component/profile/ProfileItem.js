import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span>at {company}</span>}
        </p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          Vew Profile
        </Link>
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check'></i>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
