import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Original = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc="#656565"
                fc="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.aduanas.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.aduanas.uno}
                parrafoDos={props.data.areas.practica.area.aduanas.dos}
                parrafoTres={props.data.areas.practica.area.aduanas.tres}
                parrafoCuatro={props.data.areas.practica.area.aduanas.cuatro}
                parrafoCinco={props.data.areas.practica.area.aduanas.cinco}
            />
        </section>
    </div>
    )
}

export default Original;