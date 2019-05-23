import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
//Frima
import Firma from './Pages/Firma'
//Oficina
import Oficina from './Pages/Oficina'
//Paracticas
import Banking from './Pages/Practicas/Banking'
import Corporate from './Pages/Practicas/Corporate'
import Employee from './Pages/Practicas/Employee'
import Energy from './Pages/Practicas/Energy'
import FATCA from './Pages/Practicas/FATCA'
import Indirect from './Pages/Practicas/Indirect'
import Individuals from './Pages/Practicas/Individuals'
import Instituciones from './Pages/Practicas/Instituciones'
import Insurance from './Pages/Practicas/Insurance'
import Internacional from './Pages/Practicas/Internacional'
import Litigation from './Pages/Practicas/Litigation'
import LocalTaxation from './Pages/Practicas/LocalTaxation'
import MyA from './Pages/Practicas/M&A'
import Navieras from './Pages/Practicas/Navieras'
import Practicas from './Pages/Practicas/Practicas'
import Private from './Pages/Practicas/Private'
import ProBono from './Pages/Practicas/ProBono'
import Project from './Pages/Practicas/Project'
import Securities from './Pages/Practicas/Securities'
import Tax from './Pages/Practicas/Tax'
import TaxContro from './Pages/Practicas/TaxContro'
import Trade from './Pages/Practicas/Trade'
import Trasfer from './Pages/Practicas/Transfer'
import VentaDirecta from './Pages/Practicas/VentaDirecta'
//Equipo
import Team from './Pages/Equipo/Equipo'
import sos001 from './Pages/Equipo/sos%001'
import sos002 from './Pages/Equipo/sos%002'
import sos003 from './Pages/Equipo/sos%003'
import sos004 from './Pages/Equipo/sos%004'
import sos005 from './Pages/Equipo/sos%005'
import sos006 from './Pages/Equipo/sos%006'
import sos007 from './Pages/Equipo/sos%007'
import as101 from './Pages/Equipo/as%101'
import as102 from './Pages/Equipo/as%102'
import as103 from './Pages/Equipo/as%103'
import abo201 from './Pages/Equipo/abo%201'
import abo202 from './Pages/Equipo/abo%202'
import abo203 from './Pages/Equipo/abo%203'
import abo204 from './Pages/Equipo/abo%204'
import abo205 from './Pages/Equipo/abo%205'
import pas301 from './Pages/Equipo/pas%301'
import pas302 from './Pages/Equipo/pas%302'
import pas303 from './Pages/Equipo/pas%303'
import pas304 from './Pages/Equipo/pas%304'
import pas305 from './Pages/Equipo/pas%305'
import pas306 from './Pages/Equipo/pas%306'
//Publicaciones
import Public from './Pages/Publicaciones/Publicacion'
import p2007 from './Pages/Publicaciones/2007'
import p2008 from './Pages/Publicaciones/2008'
import p2009 from './Pages/Publicaciones/2009'
import p2010 from './Pages/Publicaciones/2010'
import p2011 from './Pages/Publicaciones/2011'
import p2012 from './Pages/Publicaciones/2012'
import p2013 from './Pages/Publicaciones/2013'
import p2014 from './Pages/Publicaciones/2014'
import p2015 from './Pages/Publicaciones/2015'
import p2016 from './Pages/Publicaciones/2016'
import p2017 from './Pages/Publicaciones/2017'
import p2018 from './Pages/Publicaciones/2018'
import p2019 from './Pages/Publicaciones/2019'



import './App.css';

function App() {
  return (
    <Router>
          {/* Firma */}
          <Route exact path="/firma" component={Firma}/>
          {/* Practicas */}
            <Route exact path="/practicas" component={Practicas}/>
                <Route exact path="/practicas/private" component={Private}/>
                <Route exact path="/practicas/banking" component={Banking}/>
                <Route exact path="/practicas/indirect" component={Indirect}/>
                <Route exact path="/practicas/tax" component={Tax}/>
                <Route exact path="/practicas/taxContro" component={TaxContro}/>
                <Route exact path="/practicas/navieras" component={Navieras}/>
                <Route exact path="/practicas/locTaxation" component={LocalTaxation}/>
                <Route exact path="/practicas/proBono" component={ProBono}/>
                <Route exact path="/practicas/insurance" component={Insurance}/>
                <Route exact path="/practicas/ventaDirecta" component={VentaDirecta}/>
                <Route exact path="/practicas/employeeBenefits" component={Employee}/>
                <Route exact path="/practicas/energy" component={Energy}/>
                <Route exact path="/practicas/corporTaxa" component={Corporate}/>
                <Route exact path="/practicas/m$a" component={MyA}/>
                <Route exact path="/practicas/litigation" component={Litigation}/>
                <Route exact path="/practicas/transfer-pri" component={Trasfer}/>
                <Route exact path="/practicas/instFin" component={Instituciones}/>
                <Route exact path="/practicas/interTaxation" component={Internacional}/>
                <Route exact path="/practicas/trade" component={Trade}/>
                <Route exact path="/practicas/projectFinal" component={Project}/>
                <Route exact path="/practicas/fatcaCrs" component={FATCA}/>
                <Route exact path="/practicas/individuals" component={Individuals}/>
                <Route exact path="/practicas/securitiesFinalProducts" component={Securities}/>
          {/* Equipo */}
            <Route exact path="/equipo" component={Team}/>
              <Route exact path="/equipo/sos%001" component={sos001}/>
              <Route exact path="/equipo/sos%002" component={sos002}/>
              <Route exact path="/equipo/sos%003" component={sos003}/>
              <Route exact path="/equipo/sos%004" component={sos004}/>
              <Route exact path="/equipo/sos%005" component={sos005}/>
              <Route exact path="/equipo/sos%006" component={sos006}/>
              <Route exact path="/equipo/sos%007" component={sos007}/>
              <Route exact path="/equipo/as%101" component={as101}/>
              <Route exact path="/equipo/as%102" component={as102}/>
              <Route exact path="/equipo/as%103" component={as103}/>
              <Route exact path="/equipo/abo%201" component={abo201}/>
              <Route exact path="/equipo/abo%202" component={abo202}/>
              <Route exact path="/equipo/abo%203" component={abo203}/>
              <Route exact path="/equipo/abo%204" component={abo204}/>
              <Route exact path="/equipo/abo%205" component={abo205}/>
              <Route exact path="/equipo/pas%301" component={pas301}/>
              <Route exact path="/equipo/pas%302" component={pas302}/>
              <Route exact path="/equipo/pas%303" component={pas303}/>
              <Route exact path="/equipo/pas%304" component={pas304}/>
              <Route exact path="/equipo/pas%305" component={pas305}/>
              <Route exact path="/equipo/pas%306" component={pas306}/>
          {/* Oficinas */}
            <Route exact path="" component={Oficina}/>          
          {/* Public */}
            <Route exact path="/publicaciones/" component={Public}/>
              <Route exact path="/publicaciones/2007" component={p2007}/>
              <Route exact path="/publicaciones/2008" component={p2008}/>
              <Route exact path="/publicaciones/2009" component={p2009}/>
              <Route exact path="/publicaciones/2010" component={p2010}/>
              <Route exact path="/publicaciones/2011" component={p2011}/>
              <Route exact path="/publicaciones/2012" component={p2012}/>
              <Route exact path="/publicaciones/2013" component={p2013}/>
              <Route exact path="/publicaciones/2014" component={p2014}/>
              <Route exact path="/publicaciones/2015" component={p2015}/>
              <Route exact path="/publicaciones/2016" component={p2016}/>
              <Route exact path="/publicaciones/2017" component={p2017}/>
              <Route exact path="/publicaciones/2018" component={p2018}/>
              <Route exact path="/publicaciones/2019" component={p2019}/>
    </Router>
  );
}

export default App;
