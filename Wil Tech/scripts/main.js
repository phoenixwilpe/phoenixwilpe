// ==========================================
// Funciones de Validación de Formularios
// ==========================================

document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre-cliente').value.trim();
    const email = document.getElementById('email-cliente').value.trim();
    const telefono = document.getElementById('telefono-cliente').value.trim();

    if (nombre && email && telefono) {
        if (!validateEmail(email)) {
            document.getElementById('email-error').style.display = 'block';
            return;
        }
        alert('Gracias por registrarte. Wilmar se pondrá en contacto contigo pronto.');
        document.getElementById('registro-form').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

document.getElementById('consulta-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email-consulta').value.trim();
    const mensaje = document.getElementById('mensaje-consulta').value.trim();

    if (email && mensaje) {
        if (!validateEmail(email)) {
            document.getElementById('consulta-email-error').style.display = 'block';
            return;
        }
        alert('Consulta enviada correctamente. Wilmar te responderá pronto.');
        document.getElementById('consulta-form').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Validación en tiempo real
document.getElementById('email-cliente').addEventListener('input', function () {
    const email = this.value.trim();
    document.getElementById('email-error').style.display = validateEmail(email) ? 'none' : 'block';
});

document.getElementById('email-consulta').addEventListener('input', function () {
    const email = this.value.trim();
    document.getElementById('consulta-email-error').style.display = validateEmail(email) ? 'none' : 'block';
});

// Función para validar correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ==========================================
// Chat en Vivo
// ==========================================

const chatBox = document.getElementById('chat-box');
const openChat = document.getElementById('open-chat');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendMessageBtn = document.getElementById('send-message');

// Abrir chat
openChat.addEventListener('click', () => {
    chatBox.style.display = 'block';
    chatInput.focus();
});

// Cerrar chat
closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
});

// Enviar mensaje
sendMessageBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `Tú: ${message}`;
        messageElement.classList.add('chat-message');
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

// Enviar mensaje al presionar Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessageBtn.click();
    }
});

// ==========================================
// Dark Mode
// ==========================================

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// Cargar preferencia de modo oscuro
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Modo Claro';
} else {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = 'Modo Oscuro';
}

// ==========================================
// Carga Dinámica de Proyectos (Simulación)
// ==========================================

const proyectosContainer = document.getElementById('proyectos-container');

function cargarProyectos() {
    const proyectos = [
        { titulo: 'Proyecto 1', descripcion: 'Descripción del proyecto 1.', imagen: 'https://picsum.photos/300/200' },
        { titulo: 'Proyecto 2', descripcion: 'Descripción del proyecto 2.', imagen: 'https://picsum.photos/300/200' },
        { titulo: 'Proyecto 3', descripcion: 'Descripción del proyecto 3.', imagen: 'https://picsum.photos/300/200' }
    ];

    proyectos.forEach(proyecto => {
        const proyectoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-lg">
                    <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.titulo}</h5>
                        <p class="card-text">${proyecto.descripcion}</p>
                    </div>
                </div>
            </div>
        `;
        proyectosContainer.innerHTML += proyectoHTML;
    });
}

cargarProyectos();

// ==========================================
// Animaciones con ScrollReveal
// ==========================================

ScrollReveal().reveal('.hero-section h1', { 
    delay: 300,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.hero-section .lead', { 
    delay: 500,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.section', { 
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});