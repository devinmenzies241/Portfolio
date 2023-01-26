import wompratwebsite from './images/wompratwebsite.png';
import AQI_monitor_preview from './images/AQI_monitor_preview.png';

const projects = [
  {
    id: 1,
    name: 'Womp Rat - Artist Website',
    description:'This is a website I built to host my own music, and create a call to action to join my mailing list. Built using Node.js Express.js, HTML, CSS (with Bootstrap) and Javascript. The email subsribe list is facilitated by the MailChimp API. I also have the BandsinTown API integrated into my "Shows" page to display upcoming performances.',
    imgSrc: wompratwebsite,
    href: 'https://wompratbass.onrender.com/',
  },
  {
    id: 2,
    name: "Denver Air Quality Monitor", 
    description: `This website monitors the air quality in Denver, CO. It provides open source weather data such as API and pollutant levels. If AQI levels exceed 100 and someone visits the site, the level determined at which air quality begins to effect human health at all ages, an email is sent to the governor's office with information on air quality, and how they can make efforts to improve air quality for Colorado residents. This was accomplished using Nodemailer, an npm package. The site also serves as a general informational hub regarding air quality in general.`,
    imgSrc: AQI_monitor_preview,
    href: 'https://denver-aqi-monitor.onrender.com', 
  },
]


export default projects; 