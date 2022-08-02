
import mapMarkerImg from '../images/Logo.svg'
import { Link } from 'react-router-dom'
import { FiPlus} from 'react-icons/fi'

import { MapContainer, Marker, Popup, LatLngBounds} from 'react-leaflet'

import '../styles/pages/orphanagesMap.css'
import { latLngBounds } from 'leaflet'

function OrphanagesMap () {
  
  const position = new LatLngBounds([-23.5358976,-46.7417327])

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
        <MapContainer center={position} zoom={15}>
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
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