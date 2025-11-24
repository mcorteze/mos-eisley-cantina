// Datos simulados de los eventos disponibles en la cantina
const eventsData = [
  {
    id: "1",
    name: "Noche de Jazz Galáctico",
    date: "2025-11-25",
    location: "Sala Principal",
    category: "Concierto",
    organizer: "Figrin D'an and the Modal Nodes",
    attendees: 120,
    description: "Disfruta de los mejores éxitos de la banda más famosa de la galaxia. ¡No se permiten droides!",
    image: "https://static.wikia.nocookie.net/esstarwars/images/f/fa/Modal_Nodes_02.jpg"
  },
  {
    id: "2",
    name: "Torneo de Sabacc",
    date: "2025-11-26",
    location: "Mesa Privada 4",
    category: "Juegos",
    organizer: "Han Solo",
    attendees: 8,
    description: "Apuestas altas y mucha tensión. ¿Tienes lo que se necesita para ganar el Halcón Milenario?",
    image: "https://i.imgur.com/zxlVXCB.jpeg"
  },
  {
    id: "3",
    name: "Cata de Bebidas Exóticas",
    date: "2025-11-27",
    location: "Barra Central",
    category: "Gastronomía",
    organizer: "Wuher",
    attendees: 30,
    description: "Prueba las bebidas más fuertes del Borde Exterior. Incluye Leche Azul y Spotchka.",
    image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/dining/disneyland/ogas-cantina/cantina-dj-rex-16x9.jpg"
  },
  {
    id: "4",
    name: "Reunión de Cazarrecompensas",
    date: "2025-11-28",
    location: "Sótano Oscuro",
    category: "Conferencia",
    organizer: "Gremio de Cazarrecompensas",
    attendees: 50,
    description: "Intercambio de información sobre objetivos de alto valor. Solo miembros verificados.",
    image: "https://www.latercera.com/resizer/v2/NW6TEKSW4RE6VN32754T65QRUA.jpg?auth=323f8dcfe94f69e92343d1092bcc6a2084bba5fa176cd76e161288e8670625a0&smart=true&width=800&height=450&quality=70"
  }
];

// Simulación de una llamada a API REST
// Devuelve una lista resumida de eventos (sin detalles pesados)
export const fetchEvents = () => {
  return new Promise((resolve) => {
    // Simulamos un retraso de red de 500ms
    setTimeout(() => {
      // Mapeamos para devolver solo la información básica necesaria para el listado
      const basicInfo = eventsData.map(({ id, name, date, location, category, image }) => ({
        id,
        name,
        date,
        location,
        category,
        image
      }));
      resolve(basicInfo);
    }, 500);
  });
};

// Simulación de una llamada a API GraphQL
// Devuelve todos los detalles de un evento específico por su ID
export const fetchEventDetails = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Buscamos el evento completo en nuestra base de datos simulada
      const event = eventsData.find((e) => e.id === id);
      if (event) {
        resolve(event); // Si existe, devolvemos todo el objeto
      } else {
        reject(new Error("Evento no encontrado")); // Si no, devolvemos error
      }
    }, 500);
  });
};
