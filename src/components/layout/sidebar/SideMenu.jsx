import {useNavigate} from "react-router-dom";
import {Menu} from "antd";
import {RiDashboardFill} from "react-icons/ri";
import {FaStackOverflow} from "react-icons/fa6";
import {MdFlightTakeoff} from "react-icons/md";

export const SideMenu = () => {
    const navigate = useNavigate();
    return (
        <Menu
            onClick={({key}) => {
                navigate(key);
            }}
            defaultSelectedKeys={[window.location.pathname]}
            items={
                [
                    {
                        label: 'Stack Overflow',
                        icon: <FaStackOverflow/>,
                        children: [
                            {
                                label: 'Respuestas',
                                key: "/overflow/answers/status",
                            },
                            {
                                label: 'Reputación',
                                key: "/overflow/answers/score",
                            },
                            {
                                label: 'Vistas',
                                key: "/overflow/answers/views",
                            },
                            {
                                label: 'Fecha',
                                key: "/overflow/answers/date",
                            }
                        ],
                    },
                    {
                        label: 'Vuelos',
                        icon: <MdFlightTakeoff/>,
                        children: [
                            {
                                label: 'Aeropuerto',
                                key: "/flights/airport",
                            },
                            {
                                label: 'Vuelos aerolínea',
                                key: "/flights/airline",
                            },
                            {
                                label: 'Vuelos Por Día',
                                key: "/flights/greater",
                            },
                            {
                                label: 'Vuelos aerolínea por día',
                                key: "/flights/airline/day",
                            }
                        ],
                    },
                ]
            }
        >

        </Menu>
    );
}