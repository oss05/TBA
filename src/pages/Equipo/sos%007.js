import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webAT.png';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc7="#656565"
                fc7="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img={fotoSocio}
                        data={props.data}
                        rol={props.data.areas.equipo.socios}
                        nombreEquipo="Angel J. Turanzas Díaz"
                        correoEquipo="atd@turanzas.com.mx"
                        linkCorreo="mailto:atd@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.doce}
                    parrafoCuatro={props.data.areas.equipo.areas.trece}
                    parrafoCinco={props.data.areas.equipo.areas.diecisiete}
                    href="/areas/aduanas"
                    href2="/areas/asesoriafis"
                    href3="/areas/valoresp"
                    href4="/areas/ventasdirec"
                    href5="/areas/fundaciones"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.ATuno}
                    parrafoDos2={props.data.areas.equipo.educacion.ATdos}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.ATuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.ATdos}
                    parrafoTres3={props.data.areas.equipo.asociaciones.ATtres}
                />
            </section>

        </div>
    )
}

export default Abogado;