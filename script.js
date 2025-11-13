// Global Variables
let selectedItem = null;
let showingAllConnections = false;
let modalInstance = null;

// Detailed data for popups
const popupData = {
    // INFO AZIENDE
    'info-id-1': {
        title: 'Orange Fiber',
        content: `
            <strong>Tipo:</strong> Azienda innovativa<br>
            <strong>Specializzazione:</strong> Prima azienda al mondo a produrre fibre tessili da scarti di agrumi<br>
            <strong>SDGs:</strong> 9 (Industria e innovazione), 12 (Consumo responsabile), 13 (Azione climatica), 17 (Partnership)<br>
            <strong>Processo:</strong> Valorizzazione buccia e pastazzo di arance attraverso estrazione cellulosa<br>
            <strong>Output:</strong> Tessuto sostenibile per moda luxury e mass market<br><br>
            <strong>Finanziamenti:</strong><br>
            • 2013 FESR 2007-2013 Provincia Autonoma di Trento<br>
            • 2014 Fondo Europeo Sviluppo Regionale<br>
            • Smart&Start Invitalia (Ministero Sviluppo Economico)<br><br>
            <strong>Partner:</strong><br>
            • Salvatore Ferragamo (2017)<br>
            • H&M Conscious Exclusive (2019)<br>
            • Pitti Uomo (2019)<br>
            • E. Marinella (2021)<br>
            • Tecla 3D (2021)<br><br>
            <strong>Ricerca:</strong> Politecnico di Milano - Dipartimento di Chimica, Materiali e Ingegneria Chimica<br>
            <strong>Strategie:</strong> Bioeconomy Strategy, Circular Economy Action Plan
        `
    },
    'info-id-2': {
        title: 'RiceHouse',
        content: `
            <strong>Tipo:</strong> B-Corporation<br>
            <strong>Specializzazione:</strong> Materiali da costruzione sostenibili da scarti agricoli<br>
            <strong>SDGs:</strong> 9 (Industria), 11 (Città sostenibili), 12 (Consumo responsabile), 13 (Clima), 15 (Vita sulla terra)<br>
            <strong>Processo:</strong> Trasformazione lolla di riso in pannelli edilizi<br>
            <strong>Output:</strong> Pannelli isolanti per edilizia e arredo<br><br>
            <strong>Finanziamenti:</strong> 2021, €600 milioni B-Heroes<br><br>
            <strong>Partner:</strong><br>
            • Aziende edili nord Italia ed Europa<br>
            • Aziende agricole risicole nord Italia<br><br>
            <strong>Ricerca:</strong> Politecnico di Torino - Dipartimento di Architettura e Design<br>
            <strong>Certificazioni:</strong> B Corp<br>
            <strong>Approccio:</strong> Simbiosi industriale, economia circolare rigenerativa
        `
    },
    'info-id-3': {
        title: 'Biocosì',
        content: `
            <strong>Tipo:</strong> Startup sostenibile<br>
            <strong>Specializzazione:</strong> Packaging biodegradabile da scarti lattiero-caseari<br>
            <strong>SDGs:</strong> 6 (Acqua pulita), 9 (Industria), 12 (Consumo responsabile), 13 (Clima)<br>
            <strong>Processo:</strong> Trasformazione reflui caseari in imballaggi compostabili<br>
            <strong>Output:</strong> Packaging alimentare sostenibile<br><br>
            <strong>Finanziamenti:</strong> 2014, €1,1-1,4 milioni POR-FESR 2014-2020 Regione Puglia Innonetwork<br><br>
            <strong>Partner:</strong><br>
            • EggPlant<br>
            • Compost Natura srl<br>
            • RL Engineering srl<br>
            • CSQA<br>
            • Caseificio Colli Pugliesi<br><br>
            <strong>Ricerca:</strong><br>
            • Università degli Studi di Bari - Dipartimento Scienze Suolo Pianta Alimenti<br>
            • ENEA<br>
            • Rete Laboratori Pubblici Ricerca Microtronic<br>
            • CNR Istituto Fotonica e Nanotecnologie<br><br>
            <strong>Certificazioni:</strong> CSQA Certificazioni srl
        `
    },
    'info-id-4': {
        title: 'Milkbrick',
        content: `
            <strong>Tipo:</strong> Startup innovativa<br>
            <strong>Specializzazione:</strong> Mattoni sostenibili da latte di scarto<br>
            <strong>SDGs:</strong> 6 (Acqua pulita), 9 (Industria), 11 (Città sostenibili), 12 (Consumo responsabile), 13 (Clima)<br>
            <strong>Processo:</strong> Trasformazione latte di scarto in materiale da costruzione<br>
            <strong>Output:</strong> Mattoni per edilizia sostenibile<br><br>
            <strong>Finanziamenti:</strong> 2017, Acceleratore sardo Clhub<br><br>
            <strong>Partner:</strong><br>
            • Argiolas Formaggi<br>
            • Calcestruzzi Spa (Heidelberg Materials)<br>
            • Italcementi (Heidelberg Materials)<br>
            • CERMAL<br>
            • FREM Group (distributore)<br><br>
            <strong>Ricerca:</strong> Innovation Campus Milano (Heidelberg Materials/Italcementi)
        `
    },

    // PRESTAZIONI
    'prest-1': {
        title: 'Prestazioni Tessile - Orange Fiber',
        content: `
            <strong>Caratteristiche tecniche:</strong><br>
            • Morbido al tatto<br>
            • Traspirante<br>
            • Ipoallergico<br>
            • Duraturo nel tempo<br><br>
            <strong>Certificazioni:</strong><br>
            • Oeko-Tex Standard 100<br>
            • GOTS (Global Organic Textile Standard)<br><br>
            <strong>Proprietà fisiche:</strong><br>
            • Resistenza alla trazione: elevata<br>
            • Assorbimento umidità: ottimo<br>
            • Termoregolazione: naturale<br><br>
            <strong>Applicazioni:</strong> Moda luxury, abbigliamento casual, tessuti per interni
        `
    },
    'prest-2': {
        title: 'Prestazioni Edilizia - RiceHouse',
        content: `
            <strong>Caratteristiche tecniche:</strong><br>
            • Leggero<br>
            • Resistente<br>
            • Idrorepellente<br>
            • Elevata resistenza meccanica<br>
            • Traspirante<br>
            • Antibatterico<br>
            • Bassa dispersione calore<br>
            • Posa rapida<br>
            • Versatilità di applicazione<br><br>
            <strong>Certificazioni:</strong><br>
            • CE (marcatura europea)<br>
            • Certificazione B Corp<br>
            • ISO 14001 (gestione ambientale)<br><br>
            <strong>Proprietà fisiche:</strong><br>
            • Conducibilità termica: λ = 0.048 W/mK<br>
            • Resistenza al fuoco: Classe E<br>
            • Densità: 110-120 kg/m³<br><br>
            <strong>Applicazioni:</strong> Isolamento termico/acustico, bioedilizia, ristrutturazioni
        `
    },
    'prest-3': {
        title: 'Prestazioni Packaging - Biocosì',
        content: `
            <strong>Caratteristiche tecniche:</strong><br>
            • Biodegradabile<br>
            • Compostabile<br>
            • Antibatterico<br>
            • Malleabile<br>
            • Bassa permeabilità ad acqua e gas<br><br>
            <strong>Certificazioni:</strong><br>
            • EN 13432 (compostabilità)<br>
            • Biodegradabilità certificata<br>
            • Food contact approved<br><br>
            <strong>Proprietà fisiche:</strong><br>
            • Resistenza alla trazione: 20-35 MPa<br>
            • Allungamento a rottura: 3-10%<br>
            • Barriera all'ossigeno: elevata<br>
            • Trasparenza: buona<br><br>
            <strong>Applicazioni:</strong> Packaging alimentare, film protettivi, contenitori biodegradabili
        `
    },
    'prest-4': {
        title: 'Prestazioni Edilizia - Milkbrick',
        content: `
            <strong>Caratteristiche tecniche:</strong><br>
            • Resistente<br>
            • Isolante termico<br>
            • Sostenibile<br>
            • Traspirante<br><br>
            <strong>Certificazioni:</strong><br>
            • Certificazione materiali da costruzione<br>
            • Test prestazionali Innovation Campus Milano<br><br>
            <strong>Proprietà fisiche:</strong><br>
            • Resistenza a compressione: conforme normative<br>
            • Isolamento termico: buono<br>
            • Durabilità: elevata<br><br>
            <strong>Applicazioni:</strong> Murature perimetrali, tamponamenti, pareti interne/esterne, divisori tagliafuoco
        `
    },

    // SOSTENIBILITÀ
    'sost-1': {
        title: 'Sostenibilità - Orange Fiber',
        content: `
            <strong>Additivi utilizzati:</strong><br>
            • Poliidrossibutirrato (PHB): polimero biodegradabile<br><br>
            <strong>Impatto ambientale:</strong><br>
            • Riduzione rifiuti agrumari del 90%<br>
            • Processo a basso consumo energetico<br>
            • Zero emissioni tossiche<br>
            • Recupero acque di processo<br><br>
            <strong>Life Cycle Assessment:</strong><br>
            • Carbon footprint ridotta del 70% rispetto a fibre sintetiche<br>
            • Water footprint: -60% vs cotone convenzionale<br>
            • Fine vita: compostabile industrialmente<br><br>
            <strong>Economia circolare:</strong><br>
            • 100% scarto agrumario valorizzato<br>
            • Simbiosi con industria alimentare<br>
            • Creazione valore da sottoprodotti
        `
    },
    'sost-2': {
        title: 'Sostenibilità - RiceHouse',
        content: `
            <strong>Additivi utilizzati:</strong><br>
            • Collanti naturali a base vegetale<br>
            • Matrici polimeriche biobased<br><br>
            <strong>Impatto ambientale:</strong><br>
            • Riduzione rifiuti risicoli del 98%<br>
            • Carbon negative: sequestra più CO2 di quanta ne emetta<br>
            • Zero VOC (composti organici volatili)<br>
            • Processo a km 0 in filiera agricola<br><br>
            <strong>Life Cycle Assessment:</strong><br>
            • Embodied carbon: negativo (-120 kg CO2/m³)<br>
            • Energia grigia: 70% inferiore a isolanti tradizionali<br>
            • Fine vita: riciclabile o compostabile<br><br>
            <strong>Certificazioni sostenibilità:</strong><br>
            • B Corp Certification<br>
            • Cradle to Cradle (in sviluppo)<br>
            • EPD (Environmental Product Declaration)
        `
    },
    'sost-3': {
        title: 'Sostenibilità - Biocosì',
        content: `
            <strong>Additivi utilizzati:</strong><br>
            • Glicerina biodegradabile<br>
            • Plastificanti di origine naturale<br><br>
            <strong>Impatto ambientale:</strong><br>
            • Riduzione reflui caseari del 90%<br>
            • Evita contaminazione acque<br>
            • Processo a zero rifiuti<br>
            • Recupero proteine e lattosio<br><br>
            <strong>Life Cycle Assessment:</strong><br>
            • Carbon footprint: -80% vs plastica tradizionale<br>
            • Water footprint: valorizza acque di processo<br>
            • Fine vita: compostaggio industriale 90 giorni<br><br>
            <strong>Certificazioni sostenibilità:</strong><br>
            • EN 13432 (compostabilità)<br>
            • OK Compost (TÜV Austria)<br>
            • Biodegradabilità certificata CSQA
        `
    },
    'sost-4': {
        title: 'Sostenibilità - Milkbrick',
        content: `
            <strong>Additivi utilizzati:</strong><br>
            • Calce idraulica naturale<br>
            • Aggregati naturali<br>
            • Leganti minerali<br><br>
            <strong>Impatto ambientale:</strong><br>
            • Riduzione latte di scarto del 95%<br>
            • Valorizzazione sottoprodotto caseario<br>
            • Processo a bassa energia<br>
            • Riduzione emissioni CO2 rispetto a laterizio tradizionale<br><br>
            <strong>Life Cycle Assessment:</strong><br>
            • Carbon footprint: -40% vs mattone tradizionale<br>
            • Economia circolare locale<br>
            • Fine vita: riciclabile come inerte<br><br>
            <strong>Certificazioni sostenibilità:</strong><br>
            • Test Innovation Campus Milano<br>
            • Conformità normative edilizia sostenibile
        `
    },

    // DRIVER
    'info-scal-1': {
        title: 'Capacità Upscaling Industriale',
        content: `
            <strong>Definizione:</strong> Capacità di espandere la produzione mantenendo qualità ed efficienza<br><br>
            <strong>Fattori critici:</strong><br>
            • Disponibilità materia prima<br>
            • Capacità produttiva<br>
            • Controllo qualità<br>
            • Standardizzazione processi<br><br>
            <strong>Orange Fiber:</strong><br>
            • Scalabilità geografica per disponibilità scarti agrumi<br>
            • Criticità: difformità di produzione, costi elevati reperimento scarto<br><br>
            <strong>RiceHouse:</strong><br>
            • Scalabilità industriale per volumi scarti risicoli<br>
            • Punti forza: impatto calcolato su riso, logistica locale strategica, simbiosi industriale<br>
            • Criticità: difformità di produzione, mancanza certificazioni, bias interpretativo<br><br>
            <strong>Biocosì:</strong><br>
            • Trasformazione interna<br>
            • Criticità: costi elevati, logistica estesa, reperimento scarto, bias interpretativo<br><br>
            <strong>Milkbrick:</strong><br>
            • Logistica locale, trasformazione locale<br>
            • Criticità: competitività mercato, diversificazione scala attori<br><br>
            <strong>Sfide comuni:</strong><br>
            • Standardizzazione processi<br>
            • Logistica efficiente<br>
            • Investimenti industriali<br>
            • Formazione personale specializzato
        `
    }
};

// Hide loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    const modalElement = document.getElementById('detailModal');
    if (modalElement) {
        modalInstance = new bootstrap.Modal(modalElement);
    }

    attachEventListeners();
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('✅ Filiere Circolari initialized - bidirectional connections ready');
});

// Attach event listeners
function attachEventListeners() {
    document.querySelectorAll('.card-item-12').forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('percentage-12') || 
                e.target.classList.contains('info-icon-12')) {
                return;
            }
            handleItemClick(this);
        });
    });

    document.querySelectorAll('.info-icon-12').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const popupId = this.dataset.popup;
            if (popupId && popupData[popupId]) {
                showModal(popupData[popupId].title, popupData[popupId].content);
            }
        });
    });

    document.querySelectorAll('.percentage-12').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const popupId = this.dataset.popup;
            if (popupId && popupData[popupId]) {
                showModal(popupData[popupId].title, popupData[popupId].content);
            }
        });
    });

    const sourceFilter = document.getElementById('sourceFilter');
    const destinationFilter = document.getElementById('destinationFilter');
    const actorFilter = document.getElementById('actorFilter');
    const resetBtn = document.getElementById('resetBtn');
    const showAllConnectionsBtn = document.getElementById('showAllConnectionsBtn');

    if (sourceFilter) sourceFilter.addEventListener('change', applyFilters);
    if (destinationFilter) destinationFilter.addEventListener('change', applyFilters);
    if (actorFilter) actorFilter.addEventListener('change', applyFilters);
    if (resetBtn) resetBtn.addEventListener('click', resetView);
    if (showAllConnectionsBtn) showAllConnectionsBtn.addEventListener('click', toggleAllConnections);
}

// Handle item click
function handleItemClick(item) {
    if (selectedItem === item) {
        deselectAll();
        return;
    }

    deselectAll();
    selectedItem = item;
    item.classList.add('selected');
    highlightConnections(item);
    
    const itemTitle = item.querySelector('.item-title-12')?.textContent;
    const itemType = item.dataset.type;
    console.log(`🎯 Selected: ${itemTitle} (${itemType})`);
}

// ✨ IMPROVED LOGIC - Highlight connections
function highlightConnections(item) {
    const itemType = item.dataset.type;
    const aziende = item.dataset.aziende;
    const connections = item.dataset.connections;

    // SCENARIO 1: Click su DRIVER o FOCUS
    if (itemType === 'driver' || itemType === 'focus') {
        if (!aziende) {
            console.warn('⚠️ Driver/Focus without aziende data');
            return;
        }
        
        const aziendeList = aziende.split(',').map(id => id.trim());
        console.log(`🔗 Driver/Focus clicked, highlighting companies: ${aziendeList.join(', ')}`);
        
        // Per ogni azienda, trova il suo elemento identità e evidenzia tutto il percorso
        aziendeList.forEach(azId => {
            // Trova l'elemento identità
            const identitaEl = document.querySelector(`[data-type="identita"][data-id="${azId}"]`);
            if (!identitaEl) return;
            
            // Evidenzia l'identità
            identitaEl.classList.add('connected');
            
            // Prendi le sue connessioni
            const identitaConnections = identitaEl.dataset.connections;
            if (!identitaConnections) return;
            
            const connIds = identitaConnections.split(',').map(id => id.trim());
            
            // Evidenzia tutti gli elementi connessi
            document.querySelectorAll('.card-item-12').forEach(otherItem => {
                if (otherItem === item) return; // Skip l'elemento cliccato
                
                const otherId = otherItem.dataset.id;
                if (otherId && connIds.includes(otherId)) {
                    otherItem.classList.add('connected');
                }
            });
        });
        
        // DIM tutto il resto
        document.querySelectorAll('.card-item-12').forEach(otherItem => {
            if (otherItem === item) return;
            if (!otherItem.classList.contains('connected')) {
                otherItem.classList.add('dimmed');
            }
        });
        
        return;
    }
    
    // SCENARIO 2: Click su elemento della FILIERA PRINCIPALE
    if (connections) {
        const connectedIds = connections.split(',').map(id => id.trim());
        
        // Evidenzia le connessioni normali nella filiera
        document.querySelectorAll('#supplyChainGrid .card-item-12').forEach(otherItem => {
            if (otherItem === item) return;
            
            const otherId = otherItem.dataset.id;
            if (otherId && connectedIds.includes(otherId)) {
                otherItem.classList.add('connected');
            } else {
                otherItem.classList.add('dimmed');
            }
        });
        
        // Se l'elemento ha aziende correlate, evidenzia anche DRIVER e FOCUS
        if (aziende) {
            const aziendeList = aziende.split(',').map(id => id.trim());
            
            // Evidenzia DRIVER e FOCUS correlati
            document.querySelectorAll('[data-type="driver"], [data-type="focus"]').forEach(driverFocusItem => {
                const driverAziende = driverFocusItem.dataset.aziende;
                if (!driverAziende) return;
                
                const driverAziendeList = driverAziende.split(',').map(id => id.trim());
                
                // Check se c'è overlap tra le aziende
                const hasOverlap = aziendeList.some(az => driverAziendeList.includes(az));
                
                if (hasOverlap) {
                    driverFocusItem.classList.remove('dimmed');
                    driverFocusItem.classList.add('connected');
                }
            });
        }
    }
}

// Remove all selections
function deselectAll() {
    selectedItem = null;
    document.querySelectorAll('.card-item-12').forEach(item => {
        item.classList.remove('selected', 'connected', 'dimmed');
    });
}

// Apply filters
function applyFilters() {
    const sourceFilter = document.getElementById('sourceFilter').value;
    const destinationFilter = document.getElementById('destinationFilter').value;
    const actorFilter = document.getElementById('actorFilter').value;

    document.querySelectorAll('#supplyChainGrid .card-item-12').forEach(item => {
        let visible = true;

        if (sourceFilter && item.dataset.category && item.dataset.category !== sourceFilter) {
            visible = false;
        }

        if (destinationFilter && item.dataset.type === 'filiera-dest') {
            if (!item.textContent.toLowerCase().includes(destinationFilter)) {
                visible = false;
            }
        }

        if (actorFilter && item.dataset.type === 'identita') {
            if (!item.textContent.toLowerCase().includes(actorFilter)) {
                visible = false;
            }
        }

        item.style.display = visible ? 'flex' : 'none';
    });

    console.log(`🔍 Filters: source=${sourceFilter}, dest=${destinationFilter}, actor=${actorFilter}`);
}

// Reset view
function resetView() {
    deselectAll();
    
    ['sourceFilter', 'destinationFilter', 'actorFilter'].forEach(filterId => {
        const element = document.getElementById(filterId);
        if (element) element.value = '';
    });
    
    document.querySelectorAll('.card-item-12').forEach(item => {
        item.style.display = 'flex';
    });
    
    showingAllConnections = false;
    updateConnectionsButton();
    
    console.log('🔄 System reset');
}

// Toggle all connections
function toggleAllConnections() {
    if (showingAllConnections) {
        deselectAll();
        showingAllConnections = false;
    } else {
        deselectAll();
        document.querySelectorAll('.card-item-12').forEach(item => {
            if (item.dataset.connections || item.dataset.aziende) {
                item.classList.add('connected');
            }
        });
        showingAllConnections = true;
    }
    
    updateConnectionsButton();
    console.log(`🌐 Global connections: ${showingAllConnections ? 'ON' : 'OFF'}`);
}

// Update connections button
function updateConnectionsButton() {
    const btn = document.getElementById('showAllConnectionsBtn');
    if (btn) {
        btn.textContent = showingAllConnections ? 'nascondi connessioni' : 'connessioni globali';
        btn.classList.toggle('active', showingAllConnections);
    }
}

// Show modal
function showModal(title, content) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        
        if (modalInstance) {
            modalInstance.show();
        }
    }
}

// Export functions
window.FiliereCircolari = {
    reset: resetView,
    toggleConnections: toggleAllConnections,
    deselect: deselectAll
};

// Error handling
window.addEventListener('error', function(e) {
    console.error('❌ Filiere Circolari Error:', e.error);
});