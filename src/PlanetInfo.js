import { useState, useEffect } from "react";

function PlanetInfo()
{
    const[planetData, setPlanetData]=useState({});
    const [currentPlanet, setCurrentPlanet] = useState(1);
    const apiUrl = `https://swapi.dev/api/planets/${currentPlanet}/`;

    useEffect(() =>{
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setPlanetData(data))
        .then(error => console.error('Error fetching data:', error));
    },[apiUrl]);

    const NextPlanet = () =>
    {
        setCurrentPlanet(currentPlanet + 1)
    }

    const PreviousPlanet = () =>
    {
        if(currentPlanet > 1)
        {
            setCurrentPlanet(currentPlanet - 1)
        }
    }

    return(
        <div>
            <h2>Planet Information</h2>
            <p>Name: {planetData.name}</p>
            <p>Diameter: {planetData.diameter}</p>
            <p>Climate: {planetData.climate}</p>
            <button onClick={PreviousPlanet}>Previous Planet</button> <button onClick={NextPlanet}>Next Planet</button>
        </div>
    )
}

export default PlanetInfo;