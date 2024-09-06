import {Route, Routes} from "react-router-dom";
import {Airport} from "./flights/Airport";
import {Airline} from "./flights/Airline";
import {DailyFlights} from "./flights/DailyFlights";
import {AirlinesFlights} from "./flights/AirlinesFlights";
import {AnsweredAnswers} from "./overflow/AnsweredAnswers";
import {ScoredAnswers} from "./overflow/ScoredAnswers";
import {VisitsAnswers} from "./overflow/VisitsAnswers";
import {AgeAnswers} from "./overflow/AgeAnswers";

export const PageContent = () => {
    return (
        <div className="p-3 w-100" style={{overflowY: 'auto', height: '100%', maxWidth: '100%'}}>
            <Routes>
                <Route path="/overflow/answers/status" element={<AnsweredAnswers/>}/>
                <Route path="/overflow/answers/score" element={<ScoredAnswers/>}/>
                <Route path="/overflow/answers/views" element={<VisitsAnswers/>}/>
                <Route path="/overflow/answers/date" element={<AgeAnswers/>}/>

                <Route path="/flights/airport" element={<Airport/>}/>
                <Route path="/flights/airline" element={<Airline/>}/>
                <Route path="/flights/greater" element={<DailyFlights/>}/>
                <Route path="/flights/airline/day" element={<AirlinesFlights/>}/>
            </Routes>
        </div>
    )
}