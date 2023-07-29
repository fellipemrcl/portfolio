import PropTypes from "prop-types";

const Experience = ({ activities, companyName, period, position }) => {
  return (
    <div className="relative flex flex-col items-center mt-10 w-1/4">
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          <div className="h-16 w-2 bg-gray-400"></div>
          <div className="h-4 w-4 bg-gray-400 rounded-full mt-2"></div>
        </div>
        <div className="ml-8">
          <h2 className="text-lg font-semibold mb-2 text-sky-50">
            {companyName}
          </h2>
          <h3 className="text-md mb-2 text-sky-50">{period}</h3>
          <p className="text-xl font-bold mb-2 text-sky-50">{position}</p>
          <p className="text-xl text-sky-50">Activities</p>
          {activities?.length > 0 && (
            <ul className="activities-list text-md text-sky-50">
              {activities.map((activity, index) => (
                <li className="list-disc mt-5" key={index}>
                  {activity}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  companyName: PropTypes.string,
  period: PropTypes.string,
  position: PropTypes.string,
  activities: PropTypes.arrayOf(PropTypes.string),
};

export default Experience;
