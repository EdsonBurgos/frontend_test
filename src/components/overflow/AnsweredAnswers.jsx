import {UseFetch} from "../../hooks/UseFetch";

export const AnsweredAnswers = () => {
    const {data, loading, error} = UseFetch("https://backend.test/answers/answered_and_no");

    return (
        <div className="container">

            <h3>Respuestas contestadas y no contestadas</h3>

            {error && <b>Error: {error}</b>}
            <div className="row row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">
                                Contestadas
                            </label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.answered}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">
                                No Contestadas
                            </label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.not_answered}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}