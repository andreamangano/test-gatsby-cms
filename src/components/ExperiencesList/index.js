import React from 'react'

const ExperiencesList = ({
  heading,
  description,
  items,
}) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <ul>
        {
          items.map((item, index) => (
          <div key={`experience-item-${index}`}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            {
              item.company &&
              <div>
                <div>{item.company.name}</div>
                {
                  item.company.link &&
                  (
                    <div>{item.company.link}</div>
                  )
                }
              </div>
            }
            <div>
              {
                item.roles &&
                item.roles.map(role => (
                  <div>{role}</div>
                ))
              }
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
};


export default ExperiencesList;