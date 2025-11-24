import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchEventDetails } from "../../services/mockApi";

export default function EventoDetalle() {
    // Obtenemos el ID del evento desde la URL
    const { id } = useParams();

    // Estados locales para manejar la información del evento
    const [evento, setEvento] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Efecto para cargar los detalles cuando cambia el ID
    useEffect(() => {
        const loadDetails = async () => {
            try {
                setLoading(true);
                // Simulamos la petición GraphQL para obtener detalles específicos
                const data = await fetchEventDetails(id);
                setEvento(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadDetails();
    }, [id]);

    // Renderizado condicional según el estado de la petición
    if (loading) return <div className="text-center mt-5 text-white">Cargando detalles...</div>;
    if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;
    if (!evento) return <div className="text-center mt-5 text-white">Evento no encontrado</div>;

    return (
        <div className="container mt-5 text-white">
            <Link to="/eventos" className="btn btn-secondary mb-4">&larr; Volver a Eventos</Link>

            {/* Tarjeta de detalle completo */}
            <div className="card bg-dark text-white border-secondary shadow-lg">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img
                            src={evento.image}
                            className="img-fluid rounded-start h-100"
                            alt={evento.name}
                            style={{ objectFit: "cover", minHeight: "300px" }}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body p-4">
                            <h2 className="card-title text-warning mb-3">{evento.name}</h2>
                            <p className="card-text fs-5">{evento.description}</p>

                            <hr className="border-secondary" />

                            <div className="row mt-4">
                                <div className="col-6 mb-3">
                                    <h6 className="text-muted text-uppercase">Fecha</h6>
                                    <p className="fs-5">{evento.date}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <h6 className="text-muted text-uppercase">Lugar</h6>
                                    <p className="fs-5">{evento.location}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <h6 className="text-muted text-uppercase">Organizador</h6>
                                    <p className="fs-5">{evento.organizer}</p>
                                </div>
                                <div className="col-6 mb-3">
                                    <h6 className="text-muted text-uppercase">Asistentes</h6>
                                    <p className="fs-5">{evento.attendees}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
