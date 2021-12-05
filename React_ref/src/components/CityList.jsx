function CityList(props) {
    const cities = props.cities;

    return (
      <div>
        <h1>CityList</h1>
        <ul>
            {cities.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
      </div>
    );
  }
  export default CityList;