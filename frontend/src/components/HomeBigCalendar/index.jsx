import React, { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './HomeBigCalendar.css';

dayjs.locale('es');
const localizer = dayjsLocalizer(dayjs);

const sershEvent = process.env.REACT_APP_SERSH_EVENT;

const HomeBigCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    // Llamar a la API para obtener los eventos desde la base de datos
    const fetchEventsFromBackend = async () => {
      try {
        const response = await fetch(sershEvent);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API: ' + response.statusText);
        }
        const data = await response.json();
        console.log('Datos de la API:', data); // Verifica el formato aquí

        // Convertir las fechas a objetos Date
        const apiEvents = data.map(event => {
          const start = new Date(event.start);
          const end = new Date(event.end);

          // Asegurarse de que las fechas sean válidas
          if (isNaN(start) || isNaN(end) || start >= end) {
            console.error('Evento inválido:', event);
            return null; // O puedes lanzar un error
          }

          return {
            ...event,
            start,
            end,
          };
        }).filter(event => event !== null);

        // Combinar eventos de la API y los generados
        const combinedEvents = [
          ...apiEvents,
        ];

        setEvents(combinedEvents);

      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEventsFromBackend();

    const buttons = document.querySelectorAll('.rbc-btn-group button');
    if (buttons.length >= 5) {
      buttons[0].textContent = 'Hoy';
      buttons[1].textContent = 'Anterior';
      buttons[2].textContent = 'Siguiente';
      buttons[3].textContent = 'Mes';
      buttons[4].textContent = 'Día';
    }
  }, []);

  return (
    <div className="bodyHomeBigCalendar container mt-4 mb-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'day']}
        min={dayjs('2024-01-01T07:00:00').toDate()}
        max={dayjs('2024-12-31T20:00:00').toDate()}
        formats={{
          dayHeaderFormat: date => {
            return dayjs(date).format('dddd - DD/MM/YY');
          },
          monthHeaderFormat: date => {
            return dayjs(date).format('MMMM - YYYY');
          },
        }}
        style={{ minHeight: '80vh' }}
      />
    </div>
  );
};

export { HomeBigCalendar };