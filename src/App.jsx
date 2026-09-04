import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div>
      <h1>Flood Nowcasting App</h1>
      <MapContainer
        center={[22.5726, 88.3639]}
        zoom={12}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[22.5726, 88.3639]}>
          <Popup>This is a sample location marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default App