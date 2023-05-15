import "./studentsCard.style.css";
import Info from "./StudentsData";

const StudentsCard = () => {
  return (
    <>
      <div className="container">
        {Info.map((el, id) => {
          return (
            <div key={id} className="card">
              <img src={el.image} alt=""></img>
              <ul>
                <li>Name: {el.name}</li>
                <li>Email: {el.email}</li>
                <li>Motto: {el.lifemotto}</li>
              </ul>
              <button>{el.button}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StudentsCard;

// dropdown
