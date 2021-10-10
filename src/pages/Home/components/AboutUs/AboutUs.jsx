import React from 'react';
import './AboutUs.scss';
import EmployeeCard from '../../../../components/EmployeeCard/EmployeeCard';
import { employees, employees2 } from './info';

export default function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <h3 className="about-us-title">About Us</h3>
      <div className="about-us-container">
        {employees.map((employee) => {
          return (
            <>
              <EmployeeCard
                image={employee.image}
                name={employee.name}
                position={employee.position}
              />
            </>
          );
        })}
      </div>
      <div className="about-us-text">
        <p>
          We are a team of young professionals who have first-hand experience
          with the difficulties and barriers of investing in real estate. We
          created this platform with the aim of making real estate investing
          accessible to all. Whether you're excited to learn more about the
          movement or want to take part in it, we can't wait to hear from you!
        </p>
      </div>
      <div className="about-us-container">
        {employees2.map((employee) => {
          return (
            <>
              <EmployeeCard
                image={employee.image}
                name={employee.name}
                position={employee.position}
                secondary
              />
            </>
          );
        })}
      </div>
    </section>
  );
}
