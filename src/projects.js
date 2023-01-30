import wompratwebsite from './images/wompratwebsite.png';
import AQI_monitor_preview from './images/AQI_monitor_preview.png';

const projects = [
  {
    id: 1,
    name: 'Womp Rat - Artist Website',
    builtOn: 'HTML, CSS, Javascript, Bootstrap, Node.js, Express',
    description:'This is a website I built to host my music project, and create a call to action to join my mailing list. The email subscribe list is facilitated by the MailChimp API. I also have the BandsinTown API integrated into my "Shows" page to display upcoming performances.',
    imgSrc: wompratwebsite,
    href: 'https://wompratbass.onrender.com/',
  },
  {
    id: 2,
    name: "Denver Air Quality Monitor", 
    builtOn: 'HTML, CSS, Javascript, Bootstrap, Node.js, Express',
    description: `This website monitors the air quality in Denver, CO. It provides open source weather data such as air quality index and pollutant levels. While visiting the site, if the AQI is 100 or higher an email is sent to the governor's office with information on how they can make efforts to improve air quality for Colorado residents. This was accomplished using Nodemailer, an npm package. The site also serves as a general informational hub regarding air quality in general.`,
    imgSrc: AQI_monitor_preview,
    href: 'https://denver-aqi-monitor.onrender.com', 
  },
]


export default projects; 