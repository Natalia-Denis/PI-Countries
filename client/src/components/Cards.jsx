import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { getDetail } from "../actions";

export default function Cards(currentCountry) {

const country = useSelector((store) => store.countries);
  const dispatch = useDispatch();
const countrys= currentCountry
  console.log(countrys)

  return (
    <div>
      
      {country.map((el) => (
        <Link
          to={`/countries/${el.id}`}
          onClick={() => dispatch(getDetail(el.id))}
        >
          <Card name={el.name} image={el.image} continent={el.continent} />
        </Link>
      ))}
      
    </div>
  );
}
