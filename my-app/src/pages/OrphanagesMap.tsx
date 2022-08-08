
import mapMarkerImg from '../images/Logo.svg'
import { Link } from 'react-router-dom'
import { FiPlus} from 'react-icons/fi'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import '../styles/pages/orphanagesMap.css'

const dataPosition:[number,number] = [-23.5358976,-46.7417327]

function OrphanagesMap () {
  return (
    <div id="page-map">
      <aside>
        <header>  
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :) </p>
        </header>

        <footer>
          <strong>Guarulhos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <div>
      <MapContainer 
        center={dataPosition} 
        zoom={13} 
        scrollWheelZoom={true}
        style={{ width:'100vw', height: '100%', position:'absolute', overflowY:'hidden' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={dataPosition}>
          <Popup>
            Orfanato.
          </Popup>
        </Marker>
      </MapContainer>
      </div>


      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;