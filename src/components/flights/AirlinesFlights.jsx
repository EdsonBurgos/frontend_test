import {UseFetch} from "../../hooks/UseFetch";
import {useState} from "react";

export const AirlinesFlights = () => {
    const {data, loading, error} = UseFetch("https://backend.test/flights/days/greater/2");


    if (!loading) {
        let airlines = data?.response.airlines;
        let keys = Object.keys(airlines);
        console.log(data);
        console.log(keys);

        return (
            <div className="container">

                <h3>Aerolíneas con mas vuelos por día</h3>
                <hr/>

                {error && <b>Error: {error}</b>}

                {keys.map(key => (
                    <div className="row row-cols-md-3 row-cols-sm-1 mb-3">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body">
                                    <label className="fw-bold" htmlFor="AirportName">
                                        Aerolínea
                                    </label>
                                    <p className="mb-0" id="AirportName">
                                        {airlines[key].airline}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body">
                                    <label className="fw-bold" htmlFor="AirportName">
                                        Día
                                    </label>
                                    <p className="mb-0" id="AirportName">
                                        {loading && <b>Cargando...</b>}
                                        {airlines[key].day}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body">
                                    <label className="fw-bold" htmlFor="AirportName">
                                        Vuelos
                                    </label>
                                    <p className="mb-0" id="AirportName">
                                        {loading && <b>Cargando...</b>}
                                        {airlines[key].flights}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}