import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoApiOptions, GEO_API_URL } from "../../api"

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    // inputValue=our search text
    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);

            const { data } = await response.json();
            console.log(data);

            if (!Array.isArray(data)) {
                return { options: [] };
            }

            const options = data.map((city) => {
                return {
                    value: `${city.latitude}${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`
                }
            })

            return { options };

        } catch (error) {
            console.error(error);
        }

    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)

    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />

    );
}

export default Search