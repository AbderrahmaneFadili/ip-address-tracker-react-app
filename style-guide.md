# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

- Very Dark Gray: hsl(0, 0%, 17%)
- Dark Gray: hsl(0, 0%, 59%)

## Typography

### Body Copy

- Font size (text input): 18px

### Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 400, 500, 700

### Website Content

IP Address Tracker

Search for any IP address or domain

IP Address
Location
Timezone
UTC <!-- add offset value dynamically using the API -->
ISP

### Example of fetch data

var ip = "105.159.100.135";
var api_key = "at_rsr8UcOSst3hwzYfFP8i8bTCt3ea6";

    fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ip}`)
      .then((r) => r.json())
      .then((data) => setData(data));

### map example setup

function App() {
const [location, setLocation] = useState([0, 0]);
const position = [51.505, -0.09];

useEffect(() => {
window.navigator.geolocation.getCurrentPosition((s) =>
setLocation([s.coords.latitude, s.coords.longitude]),
);
}, []);

return location[0] !== 0 ? (
<MapContainer
      className="main"
      center={location}
      zoom={13}
      scrollWheelZoom={true}
    >
<TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
<Marker icon={{}} position={location}>
<Popup>Welcome</Popup>
</Marker>
</MapContainer>
) : (
<h1>Loading...</h1>
);
}
