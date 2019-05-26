import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Badge from '../../components/BadgePublicaciones';
const P2018 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc2="#656565"
                fc2="#fff" />
            <div style={{width:"100%"}}>
            <Badge
                data={props.data}
                año="2018"
                linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2018/at-03-18.pdf"                
                descripcionAño="03/18"
            />
            <Badge
                data={props.data}
                año="2018"
                linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2018/at-02-18.pdf"
                descripcionAño="02/18"
            />
            <Badge
                data={props.data}
                año="2018"
                linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2018/at-01-18.pdf"
                descripcionAño="01/18"
            />
            </div>
        </div>
            )
        }
        
export default P2018;