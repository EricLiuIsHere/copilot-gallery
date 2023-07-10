import Limitations from '../common/limitations';
import { Limitation } from '../common/limitations';

function LimitationSection() {

  return (
    <div className="py-4 px-4 my-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <ul className="list-decimal pl-3">
        {Limitations.map((limitation: Limitation) => (
          <li className="text-gray-500">
            <p className="text-gray-500">{limitation.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LimitationSection;