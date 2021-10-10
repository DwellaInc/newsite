import React from 'react';
import './EmployeeCard.scss';

export default function EmployeeCard({ image, name, position, secondary }) {
  return (
    <div
      className={
        secondary ? 'employee-card employee-card-secondary' : 'employee-card'
      }
    >
      <img className="employee-card-image" src={image} alt={name} />
      <h4>{name}</h4>
      <h5>{position}</h5>
    </div>
  );
}
