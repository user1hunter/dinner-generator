import { useHistory } from "react-router-dom"
import "./DinnerHome.css"

export const DinnerHome = () => {
  const history = useHistory();

  const dinnersList = () => {
    history.push("/choices")
  };
  const generateDinners = () => {
    history.push("/generator")
  };

  return (
    <section className="buttons">
      <article className="buttons--dinners">
        <button onClick={() => {
          dinnersList();
        }}
        >View Dinner Options</button>
      </article>
      <article className="buttons--generator">
        <button onClick={() => {
          generateDinners();
        }}
        >Generator</button>
      </article>
    </section>
  ) 
};

