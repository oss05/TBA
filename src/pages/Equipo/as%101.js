import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:1500}}>
            <Izq data={props.data}
            bgc11 = "#656565"
            fc11 = "#fff" />
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.asociados}
                    nombreEquipo="Pablo Fernández de Cevallos y Torres"
                    correoEquipo="pfdecevallos@turanzas.com.mx"
                    linkCorreo="mailto:pfdecevallos@turanzas.com.mx"
                />
                 <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.nueve}
                    parrafoTres={props.data.areas.equipo.areas.diez}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.PFuno}
                    parrafoDos2={props.data.areas.equipo.educacion.PFdos}

                />

            </section>

        </div>
    )
}

export default Abogado;