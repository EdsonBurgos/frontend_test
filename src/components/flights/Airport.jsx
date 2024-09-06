import {UseFetch} from "../../hooks/UseFetch";

export const Airport = () => {
    const {data, loading, error} = UseFetch("https://backend.test/airport/movements/max");

    return (
        <div className="container">

            <h3>Aeropuerto con mayor movimiento</h3>

            {error && <b>Error: {error}</b>}
            <div className="row row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">Nombre de aeropuerto</label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.movements.airport}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">Número de movimientos</label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.movements.movements}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}