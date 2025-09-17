// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal para proyectos
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    if (project === 'allways') {
        title.textContent = 'AllWays Transporte - Detalles';
        content.innerHTML = `
            <p class="mb-4">Lideré el desarrollo de una solución integral para optimizar el transporte público en mi ciudad, gestionando backend, frontend y hardware como proyecto final del colegio.</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>Diseñé y construí una API RESTful robusta con Django y Django REST Framework para manejar datos de geolocalización, usuarios y rutas.</li>
                <li>Integré componentes de hardware con Arduino, demostrando capacidad para trabajar en sistemas embebidos.</li>
                <li>Utilicé la API de Google Maps para funcionalidades clave, como cálculo de rutas y visualización de geolocalización en tiempo real.</li>
                <li>Gestioné el ciclo de vida completo: análisis de problemática social, definición del MVP, selección de tecnologías y metodologías ágiles.</li>
            </ul>
            <h4 class="mt-6 font-semibold text-lg">Arquitectura</h4>
            <div class="mermaid">
                graph TD;
                    A[API - Django] --> B[Base de Datos - PostgreSQL];
                    C[Arduino Hardware] --> A;
                    A --> D[Frontend - Flutter];
            </div>
            <h4 class="mt-6 font-semibold text-lg">Lecciones Aprendidas</h4>
            <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>Elegí Django por su flexibilidad en APIs RESTful y escalabilidad para el MVP.</li>
                <li>El uso de Google Maps me enseñó a integrar APIs externas para datos dinámicos.</li>
                <li>El análisis social me enseñó a priorizar necesidades reales en el diseño.</li>
            </ul>
            <p class="text-sm text-gray-600 mt-4">Impacto: Proyecto en curso, evaluado por mi profesora, con potencial para optimizar el transporte público local.</p>
        `;
    } else if (project === 'boveda') {
        title.textContent = 'Bóveda de Claves - Cube Solutions - Detalles';
        content.innerHTML = `
            <p class="mb-4">Colaboré en el diseño e implementación de una bóveda de claves segura para uso interno de Cube Solutions durante mi pasantía profesionalizante (junio 2025 - julio 2025).</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>Trabajé en equipo de 3 personas bajo metodologías ágiles (Scrum), aplicando NestJS y TypeScript para desarrollar endpoints seguros.</li>
                <li>Utilicé MongoDB para el almacenamiento de datos y Flutter para crear una interfaz de usuario intuitiva.</li>
                <li>Implementé autenticación con tokens JWT y realicé consultas HTTP exitosas, asegurando una integración robusta del sistema.</li>
                <li>Expandí mis conocimientos en software e infraestructura TI, contribuyendo a una visión integral desde el análisis hasta la implementación.</li>
            </ul>
            <h4 class="mt-6 font-semibold text-lg">Arquitectura</h4>
            <div class="mermaid">
                graph TD;
                    A[Frontend - Flutter] --> B[Backend - NestJS];
                    B --> C[Base de Datos - MongoDB];
            </div>
            <h4 class="mt-6 font-semibold text-lg">Lecciones Aprendidas</h4>
            <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>Aprendí a utilizar NestJS en un entorno ágil, optimizando la escalabilidad de los endpoints.</li>
                <li>La implementación de tokens JWT mejoró mi comprensión de la seguridad en aplicaciones web.</li>
                <li>El trabajo en equipo me enseñó a coordinar tareas y resolver problemas bajo presión.</li>
                <li>La integración con Flutter reforzó mi habilidad para diseñar interfaces funcionales.</li>
            </ul>
            <p class="text-sm text-gray-600 mt-4">Impacto: Proporcioné una base sólida para el desarrollo continuo del proyecto, facilitando su avance por parte de la empresa o futuros pasantes.</p>
        `;
    }
    modal.classList.remove('hidden');
    setTimeout(() => {
        mermaid.init(undefined, document.querySelectorAll('.mermaid')); // Renderizar Mermaid después de mostrar
        Prism.highlightAll(); // Renderizar Prism después de mostrar
    }, 0); // Retraso mínimo para asegurar renderizado
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
}

// Form contacto con EmailJS y respuesta automática
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        emailjs.send('service_dytcf9b', 'template_636pnfg', {
            user_name: name,
            user_email: email,
            message: message
        }, 'scuvADP9QxIlc3AaK')
        .then(() => {
            // Enviar correo de respuesta automática al usuario
            return emailjs.send('service_dytcf9b', 'template_erf591y', {
                user_name: name,
                user_email: email,
                message: 'Gracias por tu mensaje. Lo revisaré y te responderé pronto.'
            }, 'scuvADP9QxIlc3AaK');
        })
        .then((response) => {
            alert('¡Mensaje enviado con éxito! El remitente recibirá una confirmación.');
            document.getElementById('contactForm').reset(); // Limpia el formulario
        }, (error) => {
            alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
        });
    } else {
        alert('Por favor, completa todos los campos.');
    }
});