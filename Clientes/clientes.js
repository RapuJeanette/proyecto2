// Datos de muestra para los clientes
const clientsData = [
    {
        id: 1,
        name: "Juan Pérez",
        email: "juan@ejemplo.com",
        phone: "+591 77788899",
        status: "prueba-gratuita",
        endDate: "2024-02-01",
        lastContact: "2024-01-15"
    },
    {
        id: 2,
        name: "Ana Martínez",
        email: "ana@ejemplo.com",
        phone: "+591 77788892",
        status: "prueba-gratuita",
        endDate: "2024-02-03",
        lastContact: "2024-01-14"
    },
    {
        id: 3,
        name: "Carlos López",
        email: "carlos@ejemplo.com",
        phone: "+591 77788893",
        status: "suscripcion-activa",
        endDate: "2024-12-15",
        lastContact: "2024-01-10"
    },
    {
        id: 4,
        name: "María García",
        email: "maria@ejemplo.com",
        phone: "+591 77788894",
        status: "suscripcion-activa",
        endDate: "2024-11-20",
        lastContact: "2024-01-12"
    },
    {
        id: 5,
        name: "Luis Rodríguez",
        email: "luis@ejemplo.com",
        phone: "+591 77788895",
        status: "prueba-gratuita",
        endDate: "2024-02-05",
        lastContact: "2024-01-13"
    },
    {
        id: 6,
        name: "Sofia Hernández",
        email: "sofia@ejemplo.com",
        phone: "+591 77788896",
        status: "suscripcion-activa",
        endDate: "2024-10-30",
        lastContact: "2024-01-11"
    },
    {
        id: 7,
        name: "Roberto Silva",
        email: "roberto@ejemplo.com",
        phone: "+591 77788897",
        status: "prueba-gratuita",
        endDate: "2024-02-08",
        lastContact: "2024-01-16"
    },
    {
        id: 8,
        name: "Carmen Vargas",
        email: "carmen@ejemplo.com",
        phone: "+591 77788898",
        status: "suscripcion-activa",
        endDate: "2024-09-25",
        lastContact: "2024-01-09"
    }
];

// Variables globales
let currentFilter = 'prueba-gratuita';
let filteredClients = [];
let currentSort = null;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    filterClients();
    updateTabCounts();
}

function setupEventListeners() {
    // Configurar tabs de filtro
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover clase active de todos los tabs
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            
            // Agregar clase active al tab clickeado
            this.classList.add('active');
            
            // Actualizar filtro actual
            currentFilter = this.dataset.filter;
            
            // Filtrar clientes
            filterClients();
        });
    });

    // Configurar input de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterClients();
        });
    }

    // Configurar dropdown de filtros
    const filterButton = document.getElementById('filterButton');
    const filterDropdown = document.getElementById('filterDropdown');
    
    if (filterButton && filterDropdown) {
        filterButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleFilterDropdown();
        });

        // Configurar opciones de ordenamiento
        filterDropdown.addEventListener('click', function(e) {
            if (e.target.closest('.filter-option') && !e.target.closest('.clear-filter')) {
                const option = e.target.closest('.filter-option');
                const sortType = option.dataset.sort;
                
                if (sortType) {
                    setSortOption(sortType, option);
                    closeFilterDropdown();
                }
            }
        });

        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!filterDropdown.contains(e.target) && !filterButton.contains(e.target)) {
                closeFilterDropdown();
            }
        });
    }
}

function toggleFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    const button = document.getElementById('filterButton');
    
    if (dropdown.classList.contains('show')) {
        closeFilterDropdown();
    } else {
        dropdown.classList.add('show');
        button.classList.add('active');
    }
}

function closeFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    const button = document.getElementById('filterButton');
    
    dropdown.classList.remove('show');
    button.classList.remove('active');
}

function setSortOption(sortType, optionElement) {
    // Remover active de todas las opciones
    document.querySelectorAll('.filter-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Marcar como activa la opción seleccionada
    optionElement.classList.add('active');
    
    // Establecer ordenamiento actual
    currentSort = sortType;
    
    // Aplicar ordenamiento
    applySorting();
}

function clearSort() {
    currentSort = null;
    
    // Remover active de todas las opciones
    document.querySelectorAll('.filter-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Filtrar sin ordenamiento
    filterClients();
    closeFilterDropdown();
}

function filterClients() {
    const searchTerm = document.getElementById('searchInput') ? 
        document.getElementById('searchInput').value.toLowerCase() : '';

    // Filtrar por status y búsqueda
    filteredClients = clientsData.filter(client => {
        // Filtro por status
        const matchesStatus = client.status === currentFilter;
        
        // Filtro de búsqueda
        const matchesSearch = !searchTerm || 
            client.name.toLowerCase().includes(searchTerm) ||
            client.email.toLowerCase().includes(searchTerm) ||
            client.phone.includes(searchTerm);

        return matchesStatus && matchesSearch;
    });

    // Aplicar ordenamiento si está activo
    if (currentSort) {
        applySorting();
    } else {
        renderClients();
    }
}

function applySorting() {
    if (!currentSort) return;

    filteredClients.sort((a, b) => {
        switch (currentSort) {
            case 'nombre':
                return a.name.localeCompare(b.name);
            case 'fecha':
                return new Date(a.endDate) - new Date(b.endDate);
            case 'contacto':
                return new Date(b.lastContact) - new Date(a.lastContact);
            default:
                return 0;
        }
    });

    renderClients();
}

function renderClients() {
    const container = document.getElementById('clientsContainer');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    if (filteredClients.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'flex';
        return;
    }
    
    container.style.display = 'flex';
    noResults.style.display = 'none';
    
    container.innerHTML = filteredClients.map(client => `
        <div class="client-card">
            <div class="client-header">
                <div class="client-info">
                    <div class="client-name">${client.name}</div>
                    <div class="client-email">${client.email}</div>
                    <div class="client-phone">${client.phone}</div>
                </div>
                <div class="client-actions">
                    <div class="client-end-date">
                        <div class="end-date-label">Finaliza el:</div>
                        <div class="end-date-value">${formatDate(client.endDate)}</div>
                    </div>
                    <div class="action-buttons">
                        <button class="action-btn call-btn" onclick="makeCall('${client.phone}')" title="Llamar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="action-btn whatsapp-btn" onclick="sendWhatsApp('${client.phone}')" title="WhatsApp">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="subscription-status">
                <span class="status-badge ${client.status}">${getStatusLabel(client.status)}</span>
                <span class="last-contact">Último contacto: ${formatDate(client.lastContact)}</span>
            </div>
        </div>
    `).join('');
}

function updateTabCounts() {
    const pruebaCount = clientsData.filter(client => client.status === 'prueba-gratuita').length;
    const suscripcionCount = clientsData.filter(client => client.status === 'suscripcion-activa').length;
    
    document.getElementById('pruebaCount').textContent = pruebaCount;
    document.getElementById('suscripcionCount').textContent = suscripcionCount;
}

// Funciones de utilidad
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

function getStatusLabel(status) {
    switch (status) {
        case 'prueba-gratuita':
            return 'Prueba Gratuita';
        case 'suscripcion-activa':
            return 'Suscripción Activa';
        default:
            return status;
    }
}

function makeCall(phone) {
    // Simular llamada
    showNotification(`Iniciando llamada a ${phone}`, 'info');
    
    // Aquí se podría integrar con un sistema de telefonía real
    // window.location.href = `tel:${phone}`;
}

function sendWhatsApp(phone) {
    // Simular WhatsApp
    const cleanPhone = phone.replace(/\D/g, '');
    const message = encodeURIComponent('Hola, me comunico desde StreamCRM para dar seguimiento a tu suscripción.');
    
    showNotification(`Abriendo WhatsApp para ${phone}`, 'success');
    
    // Abrir WhatsApp Web
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const bgColor = type === 'success' ? '#10b981' : 
                   type === 'error' ? '#ef4444' : 
                   '#3b82f6';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        font-family: "Inter", sans-serif;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Funciones adicionales para mejorar la funcionalidad

// Función para agregar nuevo cliente
function addNewClient(clientData) {
    const newClient = {
        id: Math.max(...clientsData.map(c => c.id)) + 1,
        ...clientData
    };
    
    clientsData.push(newClient);
    updateTabCounts();
    filterClients();
    showNotification('Nuevo cliente agregado correctamente', 'success');
}

// Función para actualizar estado de cliente
function updateClientStatus(clientId, newStatus) {
    const client = clientsData.find(c => c.id === clientId);
    if (client) {
        client.status = newStatus;
        updateTabCounts();
        filterClients();
        showNotification(`Estado del cliente actualizado a ${getStatusLabel(newStatus)}`, 'success');
    }
}

// Función para registrar contacto
function recordContact(clientId) {
    const client = clientsData.find(c => c.id === clientId);
    if (client) {
        client.lastContact = new Date().toISOString().split('T')[0];
        filterClients();
        showNotification('Contacto registrado correctamente', 'success');
    }
}

// Event listeners adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Agregar funcionalidad de teclas rápidas
    document.addEventListener('keydown', function(e) {
        // Ctrl + F para enfocar búsqueda
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Teclas numéricas para cambiar tabs
        if (e.key === '1') {
            document.querySelector('[data-filter="prueba-gratuita"]').click();
        } else if (e.key === '2') {
            document.querySelector('[data-filter="suscripcion-activa"]').click();
        }
    });
    
    // Agregar funcionalidad de doble clic en cards para editar
    document.addEventListener('dblclick', function(e) {
        if (e.target.closest('.client-card')) {
            const clientCard = e.target.closest('.client-card');
            const clientName = clientCard.querySelector('.client-name').textContent;
            showNotification(`Función de editar cliente "${clientName}" - En desarrollo`, 'info');
        }
    });
});

// Función para exportar datos de clientes
function exportClients(format = 'json') {
    const dataToExport = {
        clients: filteredClients,
        filter: currentFilter,
        totalCount: filteredClients.length,
        exportDate: new Date().toISOString()
    };
    
    if (format === 'json') {
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `clientes_${currentFilter}_${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showNotification('Datos de clientes exportados correctamente', 'success');
    }
}