import {UseFetch} from "../../hooks/UseFetch";

export const VisitsAnswers = () => {
    const {data, loading, error} = UseFetch("https://backend.test/answers/views/less");

    return (
        <div className="container">

            <h3>Respuesta con menos vistas</h3>

            {error && <b>Error: {error}</b>}
            <div className="row row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">
                                Respuesta
                            </label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.answer.title}
                            </p>

                            <small className="text-muted">
                                Puedes visitarla
                                <a target="_blank" href={data?.response.answer.link}> aquí</a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <label className="fw-bold" htmlFor="AirportName">
                                Vistas
                            </label>
                            <p className="mb-0" id="AirportName">
                                {loading && <b>Cargando...</b>}
                                {data?.response.answer_views}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}