import {UseFetch} from "../../hooks/UseFetch";

export const AgeAnswers = () => {
    const {data, loading, error} = UseFetch("https://backend.test/answers/old_and_recent");

    return (
        <div className="container">

            <h3>Respuesta mas antigua y mas reciente</h3>
            <hr/>

            {error && <b>Error: {error}</b>}
            <div className="row row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <h5>Respuesta antigua</h5>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                            <div className="card-body">
                                <p>
                                    <b>Pregunta: </b>
                                    {data?.response.old.answer.title}
                                </p>
                                <p>
                                    <b>Fecha de creación: </b>
                                    {data?.response.old.creation_date}
                                </p>
                                <p>
                                    <b>Fue Respondida: </b>
                                    {data?.response.old.answer.is_answered ? 'Sí' : 'No'}
                                </p>
                                <small className="text-muted">
                                    Puedes visitarla
                                    <a target="_blank" href={data?.response.old.answer.link}> aquí</a>
                                </small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h5>Respuesta Reciente</h5>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                            <div className="card-body">
                                <p>
                                    <b>Pregunta: </b>
                                    {data?.response.recent.answer.title}
                                </p>
                                <p>
                                    <b>Fecha de creación: </b>
                                    {data?.response.recent.creation_date}
                                </p>
                                <p>
                                    <b>Fue Respondida: </b>
                                    {data?.response.recent.answer.is_answered ? 'Sí' : 'No'}
                                </p>
                                <small className="text-muted">
                                    Puedes visitarla
                                    <a target="_blank" href={data?.response.recent.answer.link}> aquí</a>
                                </small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}