import {UseFetch} from "../../hooks/UseFetch";

export const DailyFlights = () => {
    const {data, loading, error} = UseFetch("https://backend.test/flights/days/max");

    return (
        <div className="container">

            <h3>Día con mas actividad</h3>

            {error && <b>Error: {error}</b>}
            <div className="row row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">
                                Fecha de Vuelos
                            </label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.flights.day}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">
                                Número de vuelos
                            </label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.flights.flights}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}