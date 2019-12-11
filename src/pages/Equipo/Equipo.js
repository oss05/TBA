import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}/>
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                
                <HeaderEquipo
                    display="none"
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    rolDisp="none"
                />
                 <p style={{width: "70%"}}>
                    {props.data.areas.firma.contenido.cuatro} 
                 </p>

            </section>

        </div>
    )
}

export default Abogado;