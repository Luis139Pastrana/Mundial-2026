// =========================================================================
// 1. DICCIONARIO DIRECTO COMPROBADO CON TUS 48 FOTOS .PNG
// =========================================================================
const codigosPaises = {
    // Grupo A
    "MEX": "mx", "SUD": "za", "COR": "kr", "CZE": "cz",
    // Grupo B
    "CAN": "ca", "BIH": "ba", "QAT": "qa", "SUI": "ch",
    // Grupo C
    "BRA": "br", "MAR": "ma", "HAI": "ht", "ESC": "gb-sct",
    // Grupo D
    "USA": "us", "PAR": "py", "AUS": "au", "TUR": "tr",
    // Grupo E
    "ALE": "de", "CUR": "cw", "COM": "ci", "ECU": "ec",
    // Grupo F
    "PBA": "nl", "JAP": "jp", "SWE": "se", "TUN": "tn",
    // Grupo G
    "BEL": "be", "EGI": "eg", "IRA": "ir", "NZL": "nz",
    // Grupo H
    "ESP": "es", "CAB": "cv", "ARA": "sa", "URU": "uy",
    // Grupo I
    "FRA": "mf", "SEN": "sn", "IRQ": "iq", "NOR": "sj",
    // Grupo J
    "ARG": "ar", "ALG": "dz", "AUT": "at", "JOR": "jo",
    // Grupo K
    "POR": "pt", "COD": "cd", "UZB": "uz", "COL": "co",
    // Grupo L
    "ING": "gb-eng", "CRO": "hr", "GHA": "gh", "PAN": "pa",

    // Extras detectados en tu carpeta por si avanzan de ronda:
    "CIV": "ci", "SJM": "sj", "MAF": "mf"
};

// Función de mapeo directo a tu carpeta local de imágenes
function obtenerUrlBandera(sigla) {
    // Buscamos la sigla exacta en mayúsculas dentro de tu lista de fotos
    const archivoPng = codigosPaises[sigla.toUpperCase()];
    
    if (archivoPng) {
        return `imagenes/${archivoPng}.png`;
    }
    // Si por alguna razón hay una sigla extraña, evita que la web tire error usando una por defecto
    return 'img/un.png'; 
}

// =====================================
// 1. BASE DE DATOS (FIXTURE COMPLETO)
// =====================================
const partidos = [
    // GRUPO A
    { fecha: "2026-06-11", hora: "15:00", local: "MEX", visitante: "SUD", grupo: "A", fase: "Grupos" },
    { fecha: "2026-06-11", hora: "22:00", local: "COR", visitante: "CZE", grupo: "A", fase: "Grupos" },
    { fecha: "2026-06-18", hora: "12:00", local: "CZE", visitante: "SUD", grupo: "A", fase: "Grupos" },
    { fecha: "2026-06-18", hora: "21:00", local: "MEX", visitante: "COR", grupo: "A", fase: "Grupos" },
    { fecha: "2026-06-24", hora: "21:00", local: "SUD", visitante: "COR", group: "A", fase: "Grupos" },
    { fecha: "2026-06-24", hora: "21:00", local: "CZE", visitante: "MEX", grupo: "A", fase: "Grupos" },

    // GRUPO B
    { fecha: "2026-06-12", hora: "15:00", local: "CAN", visitante: "BIH", grupo: "B", fase: "Grupos" },
    { fecha: "2026-06-13", hora: "15:00", local: "QAT", visitante: "SUI", grupo: "B", fase: "Grupos" },
    { fecha: "2026-06-18", hora: "15:00", local: "SUI", visitante: "BIH", grupo: "B", fase: "Grupos" },
    { fecha: "2026-06-18", hora: "18:00", local: "CAN", visitante: "QAT", grupo: "B", fase: "Grupos" },
    { fecha: "2026-06-24", hora: "15:00", local: "BIH", visitante: "QAT", grupo: "B", fase: "Grupos" },
    { fecha: "2026-06-24", hora: "15:00", local: "SUI", visitante: "CAN", grupo: "B", fase: "Grupos" },

    // GRUPO C
    { fecha: "2026-06-13", hora: "18:00", local: "BRA", visitante: "MAR", grupo: "C", fase: "Grupos" },
    { fecha: "2026-06-13", hora: "21:00", local: "HAI", visitante: "ESC", grupo: "C", fase: "Grupos" },
    { fecha: "2026-06-19", hora: "18:00", local: "ESC", visitante: "MAR", grupo: "C", fase: "Grupos" },
    { fecha: "2026-06-19", hora: "21:00", local: "BRA", visitante: "HAI", grupo: "C", fase: "Grupos" },
    { fecha: "2026-06-24", hora: "18:00", local: "ESC", visitante: "BRA", grupo: "C", fase: "Grupos" },
    { fecha: "2026-06-24", hora: "18:00", local: "MAR", visitante: "HAI", grupo: "C", fase: "Grupos" },

    // GRUPO D
    { fecha: "2026-06-12", hora: "21:00", local: "USA", visitante: "PAR", grupo: "D", fase: "Grupos" },
    { fecha: "2026-06-14", hora: "00:00", local: "AUS", visitante: "TUR", grupo: "D", fase: "Grupos" },
    { fecha: "2026-06-19", hora: "15:00", local: "USA", visitante: "TUR", grupo: "D", fase: "Grupos" },
    { fecha: "2026-06-20", hora: "00:00", local: "PAR", visitante: "AUS", grupo: "D", fase: "Grupos" },
    { fecha: "2026-06-25", hora: "22:00", local: "PAR", visitante: "TUR", grupo: "D", fase: "Grupos" },
    { fecha: "2026-06-25", hora: "22:00", local: "TUR", visitante: "USA", grupo: "D", fase: "Grupos" },

    // GRUPO E
    { fecha: "2026-06-14", hora: "13:00", local: "ALE", visitante: "CUR", grupo: "E", fase: "Grupos" },
    { fecha: "2026-06-14", hora: "19:00", local: "COM", visitante: "ECU", grupo: "E", fase: "Grupos" },
    { fecha: "2026-06-20", hora: "16:00", local: "ALE", visitante: "COM", grupo: "E", fase: "Grupos" },
    { fecha: "2026-06-20", hora: "20:00", local: "ECU", visitante: "CUR", grupo: "E", fase: "Grupos" },
    { fecha: "2026-06-25", hora: "16:00", local: "CUR", visitante: "COM", grupo: "E", fase: "Grupos" },
    { fecha: "2026-06-25", hora: "16:00", local: "ECU", visitante: "ALE", grupo: "E", fase: "Grupos" },

    // GRUPO F
    { fecha: "2026-06-14", hora: "16:00", local: "PBA", visitante: "JAP", grupo: "F", fase: "Grupos" },
    { fecha: "2026-06-14", hora: "22:00", local: "SWE", visitante: "TUN", grupo: "F", fase: "Grupos" },
    { fecha: "2026-06-20", hora: "13:00", local: "PBA", visitante: "SWE", grupo: "F", fase: "Grupos" },
    { fecha: "2026-06-21", hora: "00:00", local: "TUN", visitante: "JAP", grupo: "F", fase: "Grupos" },
    { fecha: "2026-06-25", hora: "19:00", local: "JAP", visitante: "SWE", grupo: "F", fase: "Grupos" },
    { fecha: "2026-06-25", hora: "19:00", local: "TUN", visitante: "PBA", grupo: "F", fase: "Grupos" },

    // GRUPO G
    { fecha: "2026-06-15", hora: "15:00", local: "BEL", visitante: "EGI", grupo: "G", fase: "Grupos" },
    { fecha: "2026-06-15", hora: "21:00", local: "IRA", visitante: "NZL", grupo: "G", fase: "Grupos" },
    { fecha: "2026-06-21", hora: "15:00", local: "BEL", visitante: "IRA", grupo: "G", fase: "Grupos" },
    { fecha: "2026-06-21", hora: "21:00", local: "NZL", visitante: "EGI", grupo: "G", fase: "Grupos" },
    { fecha: "2026-06-26", hora: "23:00", local: "NZL", visitante: "IRA", grupo: "G", fase: "Grupos" },
    { fecha: "2026-06-26", hora: "23:00", local: "EGI", visitante: "BEL", grupo: "G", fase: "Grupos" },

    // GRUPO H
    { fecha: "2026-06-15", hora: "12:00", local: "ESP", visitante: "CAB", grupo: "H", fase: "Grupos" },
    { fecha: "2026-06-15", hora: "18:00", local: "ARA", visitante: "URU", grupo: "H", fase: "Grupos" },
    { fecha: "2026-06-21", hora: "12:00", local: "ESP", visitante: "ARA", grupo: "H", fase: "Grupos" },
    { fecha: "2026-06-21", hora: "18:00", local: "URU", visitante: "CAB", grupo: "H", fase: "Grupos" },
    { fecha: "2026-06-26", hora: "20:00", local: "CAB", visitante: "ARA", grupo: "H", fase: "Grupos" },
    { fecha: "2026-06-26", hora: "20:00", local: "URU", visitante: "ESP", group: "H", fase: "Grupos" },

    // GRUPO I
    { fecha: "2026-06-16", hora: "15:00", local: "FRA", visitante: "SEN", grupo: "I", fase: "Grupos" },
    { fecha: "2026-06-16", hora: "18:00", local: "IRQ", visitante: "NOR", grupo: "I", fase: "Grupos" },
    { fecha: "2026-06-22", hora: "17:00", local: "FRA", visitante: "IRQ", grupo: "I", fase: "Grupos" },
    { fecha: "2026-06-22", hora: "20:00", local: "NOR", visitante: "SEN", grupo: "I", fase: "Grupos" },
    { fecha: "2026-06-26", hora: "15:00", local: "SEN", visitante: "IRQ", grupo: "I", fase: "Grupos" },
    { fecha: "2026-06-26", hora: "15:00", local: "NOR", visitante: "FRA", grupo: "I", fase: "Grupos" },

    // GRUPO J
    { fecha: "2026-06-16", hora: "21:00", local: "ARG", visitante: "ALG", grupo: "J", fase: "Grupos" },
    { fecha: "2026-06-17", hora: "00:00", local: "AUT", visitante: "JOR", grupo: "J", fase: "Grupos" },
    { fecha: "2026-06-22", hora: "13:00", local: "ARG", visitante: "AUT", grupo: "J", fase: "Grupos" },
    { fecha: "2026-06-22", hora: "23:00", local: "JOR", visitante: "ALG", grupo: "J", fase: "Grupos" },
    { fecha: "2026-06-27", hora: "22:00", local: "ALG", visitante: "AUT", grupo: "J", fase: "Grupos" },
    { fecha: "2026-06-27", hora: "22:00", local: "JOR", visitante: "ARG", grupo: "J", fase: "Grupos" },

    // GRUPO K
    { fecha: "2026-06-17", hora: "13:00", local: "POR", visitante: "COD", grupo: "K", fase: "Grupos" },
    { fecha: "2026-06-17", hora: "22:00", local: "UZB", visitante: "COL", grupo: "K", fase: "Grupos" },
    { fecha: "2026-06-23", hora: "13:00", local: "POR", visitante: "UZB", grupo: "K", fase: "Grupos" },
    { fecha: "2026-06-23", hora: "22:00", local: "COL", visitante: "COD", grupo: "K", fase: "Grupos" },
    { fecha: "2026-06-27", hora: "19:30", local: "COD", visitante: "UZB", grupo: "K", fase: "Grupos" },
    { fecha: "2026-06-27", hora: "19:30", local: "COL", visitante: "POR", grupo: "K", fase: "Grupos" },

    // GRUPO L
    { fecha: "2026-06-17", hora: "16:00", local: "ING", visitante: "CRO", grupo: "L", fase: "Grupos" },
    { fecha: "2026-06-17", hora: "19:00", local: "GHA", visitante: "PAN", grupo: "L", fase: "Grupos" },
    { fecha: "2026-06-23", hora: "16:00", local: "ING", visitante: "GHA", grupo: "L", fase: "Grupos" },
    { fecha: "2026-06-23", hora: "19:00", local: "PAN", visitante: "CRO", grupo: "L", fase: "Grupos" },
    { fecha: "2026-06-27", hora: "17:00", local: "CRO", visitante: "GHA", grupo: "L", fase: "Grupos" },
    { fecha: "2026-06-27", hora: "17:00", local: "PAN", visitante: "ING", grupo: "L", fase: "Grupos" }
];

// =====================================
// 2. ELEMENTOS DEL DOM
// =====================================
const countdownContainer = document.getElementById("countdown");
const partidosHoyContainer = document.getElementById("partidos-hoy");
const proximosContainer = document.getElementById("proximos-partidos");
const inputBuscar = document.getElementById("buscarEquipo");
const resultadosBusquedaContainer = document.getElementById("resultados-busqueda");
const botonesGrupos = document.querySelectorAll(".grupo-btn");
const partidosGrupoContainer = document.getElementById("partidos-grupo");

// =====================================
// 3. AUXILIARES: CALCULO DE ESTADOS
// =====================================
function obtenerEstado(partido) {
    const ahora = new Date();
    const inicio = new Date(`${partido.fecha.replace(/-/g, '/')} ${partido.hora}`);
    const fin = new Date(inicio.getTime() + (120 * 60 * 1000));

    if (ahora > fin) return { texto: "🔴 Finalizado", clase: "finalizado" };
    if (ahora >= inicio && ahora <= fin) return { texto: "🟢 En Vivo", clase: "en-vivo" };
    return { texto: "🔵 Próximamente", clase: "proximamente" };
}

// =====================================
// 4. LÓGICA DEL BUSCADOR (CON BANDERAS LOCALES)
// =====================================
function filtrarEquipos() {
    const texto = inputBuscar.value.toUpperCase().trim();

    if (texto === "") {
        resultadosBusquedaContainer.innerHTML = "";
        return;
    }

    const partidosFiltrados = partidos.filter(p => 
        p.local.toUpperCase().includes(texto) || 
        p.visitante.toUpperCase().includes(texto)
    );

    if (partidosFiltrados.length === 0) {
        resultadosBusquedaContainer.innerHTML = `<p class="no-partidos">No se encontraron partidos para "${texto}"</p>`;
    } else {
        resultadosBusquedaContainer.innerHTML = partidosFiltrados.map(p => {
            const estado = obtenerEstado(p);
            return `
                <div class="partido ${estado.clase}">
                    <div class="estado">${estado.texto}</div>
                    <div class="enfrentamiento-marcador">
                        <div class="equipo-bloque">
                            <img src="${obtenerUrlBandera(p.local)}" alt="${p.local}" class="bandera-icon">
                            <span class="nombre-equipo">${p.local}</span>
                        </div>
                        <span class="vs-separador">VS</span>
                        <div class="equipo-bloque">
                            <img src="${obtenerUrlBandera(p.visitante)}" alt="${p.visitante}" class="bandera-icon">
                            <span class="nombre-equipo">${p.visitante}</span>
                        </div>
                    </div>
                    <p>📅 Fecha: ${p.fecha}</p>
                    <p>🕒 Hora: ${p.hora}</p>
                    <p>🏆 Grupo ${p.grupo} - ${p.fase}</p>
                </div>
            `;
        }).join('');
    }
}

inputBuscar.addEventListener("input", filtrarEquipos);

// =====================================
// 5. FILTRADO DE GRUPOS (CON BANDERAS LOCALES)
// =====================================
botonesGrupos.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesGrupos.forEach(btn => btn.classList.remove("active"));
        boton.classList.add("active");

        const grupoSeleccionado = boton.getAttribute("data-grupo");
        const partidosDelGrupo = partidos.filter(p => p.grupo === grupoSeleccionado);

        partidosGrupoContainer.innerHTML = `
            <h3 class="titulo-grupo-activo">Encuentros del Grupo ${grupoSeleccionado}</h3>
            <div class="grid-partidos-grupo">
                ${partidosDelGrupo.map(p => {
                    const estado = obtenerEstado(p);
                    return `
                        <div class="partido ${estado.clase}">
                            <div class="estado">${estado.texto}</div>
                            <div class="enfrentamiento-marcador">
                                <div class="equipo-bloque">
                                    <img src="${obtenerUrlBandera(p.local)}" alt="${p.local}" class="bandera-icon">
                                    <span class="nombre-equipo">${p.local}</span>
                                </div>
                                <span class="vs-separador">VS</span>
                                <div class="equipo-bloque">
                                    <img src="${obtenerUrlBandera(p.visitante)}" alt="${p.visitante}" class="bandera-icon">
                                    <span class="nombre-equipo">${p.visitante}</span>
                                </div>
                            </div>
                            <p>📅 Fecha: ${p.fecha}</p>
                            <p>🕒 Hora: ${p.hora}</p>
                            <p>📌 ${p.fase}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    });
});

// =====================================
// 6. ACTUALIZACIÓN EXCLUSIVA DEL RELOJ (1s - CON BANDERAS LOCALES)
// =====================================
function actualizarReloj() {
    const ahora = new Date();
    
    // Filtrar partidos futuros
    const futuros = partidos.filter(p => {
        const pInicio = new Date(`${p.fecha.replace(/-/g, '/')} ${p.hora}`);
        return pInicio > ahora;
    }).sort((a,b) => new Date(`${a.fecha.replace(/-/g, '/')} ${a.hora}`) - new Date(`${b.fecha.replace(/-/g, '/')} ${b.hora}`));

    if (futuros.length > 0) {
        const proximo = futuros[0];
        const inicio = new Date(`${proximo.fecha.replace(/-/g, '/')} ${proximo.hora}`);
        const diff = inicio - ahora;
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        countdownContainer.innerHTML = `
            <div class="contador-info">
                <div class="enfrentamiento-marcador" style="border:none; margin-bottom:0;">
                    <div class="equipo-bloque">
                        <img src="${obtenerUrlBandera(proximo.local)}" alt="${proximo.local}" class="bandera-icon" style="width:40px; height:25px;">
                        <span class="nombre-equipo" style="font-size:1.5rem;">${proximo.local}</span>
                    </div>
                    <span class="vs-separador">VS</span>
                    <div class="equipo-bloque">
                        <img src="${obtenerUrlBandera(proximo.visitante)}" alt="${proximo.visitante}" class="bandera-icon" style="width:40px; height:25px;">
                        <span class="nombre-equipo" style="font-size:1.5rem;">${proximo.visitante}</span>
                    </div>
                </div>
                <div class="reloj-digital">
                    <span class="tiempo-bloque"><b>${d}</b>d</span> : 
                    <span class="tiempo-bloque"><b>${h}</b>h</span> : 
                    <span class="tiempo-bloque"><b>${m}</b>m</span> : 
                    <span class="tiempo-bloque"><b>${s}</b>s</span>
                </div>
                <span class="partido-detalles">Fase de ${proximo.fase} — Grupo ${proximo.grupo}</span>
            </div>
        `;
    } else {
        countdownContainer.innerHTML = "<div class='finalizado-msg'>¡Fase de grupos concluida! 🏆</div>";
    }
}

// =====================================
// 7. ACTUALIZACIÓN DE LISTAS (Lenta: 60s - CON BANDERAS LOCALES)
// =====================================
function actualizarListas() {
    const ahora = new Date();
    
    const añoHoy = ahora.getFullYear();
    const mesHoy = String(ahora.getMonth() + 1).padStart(2, '0');
    const diaHoy = String(ahora.getDate()).padStart(2, '0');
    const fechaHoy = `${añoHoy}-${mesHoy}-${diaHoy}`;

    const mañana = new Date(ahora);
    mañana.setDate(ahora.getDate() + 1);
    const añoManana = mañana.getFullYear();
    const mesManana = String(mañana.getMonth() + 1).padStart(2, '0');
    const diaManana = String(mañana.getDate()).padStart(2, '0');
    const fechaManana = `${añoManana}-${mesManana}-${diaManana}`;

    // A. Listar partidos de Hoy
    const hoy = partidos.filter(p => p.fecha === fechaHoy);
    if (hoy.length === 0) {
        partidosHoyContainer.innerHTML = "<p class='no-partidos'>No hay partidos programados para hoy.</p>";
    } else {
        partidosHoyContainer.innerHTML = hoy.map(p => {
            const estado = obtenerEstado(p);
            return `
                <div class="partido ${estado.clase}">
                    <div class="estado">${estado.texto}</div>
                    <div class="enfrentamiento-marcador">
                        <div class="equipo-bloque">
                            <img src="${obtenerUrlBandera(p.local)}" alt="${p.local}" class="bandera-icon">
                            <span class="nombre-equipo">${p.local}</span>
                        </div>
                        <span class="vs-separador">VS</span>
                        <div class="equipo-bloque">
                            <img src="${obtenerUrlBandera(p.visitante)}" alt="${p.visitante}" class="bandera-icon">
                            <span class="nombre-equipo">${p.visitante}</span>
                        </div>
                    </div>
                    <p>🕒 Hora: ${p.hora}</p>
                    <p>🏆 Grupo ${p.grupo} - ${p.fase}</p>
                </div>
            `;
        }).join('');
    }

    // B. Listar partidos de Mañana
    const partidosManana = partidos.filter(p => p.fecha === fechaManana);
    if (partidosManana.length === 0) {
        proximosContainer.innerHTML = "<p class='no-partidos'>No hay partidos programados para mañana.</p>";
    } else {
        proximosContainer.innerHTML = partidosManana.map(p => `
            <div class="partido proximamente">
                <div class="enfrentamiento-marcador">
                    <div class="equipo-bloque">
                        <img src="${obtenerUrlBandera(p.local)}" alt="${p.local}" class="bandera-icon">
                        <span class="nombre-equipo">${p.local}</span>
                    </div>
                    <span class="vs-separador">VS</span>
                    <div class="equipo-bloque">
                        <img src="${obtenerUrlBandera(p.visitante)}" alt="${p.visitante}" class="bandera-icon">
                        <span class="nombre-equipo">${p.visitante}</span>
                    </div>
                </div>
                <p>📅 Fecha: Mañana (${p.fecha})</p>
                <p>🕒 Hora: ${p.hora}</p>
                <p>🏆 Grupo ${p.grupo} - ${p.fase}</p>
            </div>
        `).join('');
    }
}

// =====================================
// 8. INICIALIZACIÓN DE INTERVALOS INDEPENDIENTES
// =====================================

// El reloj corre veloz cada 1 segundo (Súper fluido)
setInterval(actualizarReloj, 1000); 

// Las listas pesadas de abajo solo se calculan cada 60 segundos
setInterval(actualizarListas, 60000);

// Forzar renderizado inicial al entrar a la web
actualizarReloj();
actualizarListas();