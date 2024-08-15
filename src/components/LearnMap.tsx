import { LEARN_DATA } from "../lib/constants";

const LearnMap = () => {
  return (
    <div className="w-full">
      {LEARN_DATA.map((item, index) => (
        <div key={index}>
          <h2>{item.head}</h2>
          <p className="">{item.definition}</p>
          <ul>
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {item.referenceImage && (
            <img
              src={item.referenceImage}
              alt={item.head}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default LearnMap;
