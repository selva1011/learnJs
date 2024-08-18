import { LEARN_DATA } from "../lib/constants";

const LearnMap = () => {
  

  return (
    <div className="w-full ">
      {LEARN_DATA.map((item, index) => (
        <div key={index} className="pb-4">
          <h2 className="">
            <span>{(index + 1).toString().padStart(2, "0")}</span>, {item.head}
          </h2>
          <p className="text-zinc-400">{item.definition}</p>

          {item.points.filter((point) => point.trim() !== "").length > 0 && (
            <>
              <p className=" text-sky-200">In simple :</p>
              <ul>
                {item.points
                  .filter((point) => point.trim() !== "")
                  .map((point, i) => (
                    <li className="text-stone-300" key={i}>
                      &#9956; {point}
                    </li>
                  ))}
              </ul>
            </>
          )}
          {item.referenceImage && (
            <img
              src={item.referenceImage}
              alt={item.head}
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {/* <hr className="my-3" /> */}
        </div>
      ))}
    </div>
  );
};

export default LearnMap;
