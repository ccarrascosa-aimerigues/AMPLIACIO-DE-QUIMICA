/**
 * AMPLIACIÓ DE QUÍMICA - 1r Batxillerat
 * Interactivitat del portal educatiu
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialització de la renderització KaTeX per a fórmules matemàtiques i químiques
  initMathRendering();

  // Tancar modals en prémer tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCalculatorModal();
      closeUpcomingModal();
    }
  });

  // Tancar modals en fer clic al fons fosc
  const calcModal = document.getElementById('calculatorModal');
  if (calcModal) {
    calcModal.addEventListener('click', (e) => {
      if (e.target === calcModal) closeCalculatorModal();
    });
  }

  const upcomingModal = document.getElementById('upcomingModal');
  if (upcomingModal) {
    upcomingModal.addEventListener('click', (e) => {
      if (e.target === upcomingModal) closeUpcomingModal();
    });
  }
});

/**
 * Renderitza automàticament totes les expressions matemàtiques amb KaTeX
 */
function initMathRendering() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

/**
 * Canvi de sub-pestanya dins de la Unitat didàctica (Teoria, Activitats, Laboratori)
 */
function switchSubSection(sectionId) {
  // Amaga tots els panells de contingut
  const panes = document.querySelectorAll('.subcontent-pane');
  panes.forEach(pane => pane.classList.add('hidden'));

  // Desactiva tots els botons
  const buttons = document.querySelectorAll('.subsection-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-white', 'text-sky-700', 'shadow-sm');
    btn.classList.add('text-slate-600');
  });

  // Mostra el panell seleccionat
  const activePane = document.getElementById(`section-${sectionId}`);
  if (activePane) {
    activePane.classList.remove('hidden');
  }

  // Activa el botó clicat
  const activeBtn = document.getElementById(`subtab-${sectionId}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-white', 'text-sky-700', 'shadow-sm');
    activeBtn.classList.remove('text-slate-600');
  }

  // Renderitza novament fórmules si calgués
  initMathRendering();

  // Desplaçament suau cap al contingut si estem més avall
  window.scrollTo({
    top: 140,
    behavior: 'smooth'
  });
}

/**
 * Navega a una unitat didàctica concreta
 */
function navigateToUnit(unitId) {
  if (unitId === 'dissolucions') {
    switchSubSection('teoria');
  }
}

/**
 * Filtre de les targetes d'activitats (Totes, Reforç, Ampliació)
 */
function filterActivities(category) {
  const cards = document.querySelectorAll('.activity-card');
  const buttons = document.querySelectorAll('.act-filter-btn');

  // Actualitza estil dels botons
  buttons.forEach(b => {
    b.classList.remove('active', 'bg-white', 'text-slate-900', 'shadow-2xs');
    b.classList.add('text-slate-600');
  });

  const activeBtn = document.getElementById(`btn-filter-${category}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-white', 'text-slate-900', 'shadow-2xs');
    activeBtn.classList.remove('text-slate-600');
  }

  // Filtra les targetes
  cards.forEach(card => {
    if (category === 'all') {
      card.classList.remove('hidden');
    } else if (card.classList.contains(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

/**
 * Desplega o plega la resolució detallada d'un problema
 */
function toggleSolution(id) {
  const el = document.getElementById(id);
  const icon = document.getElementById(`icon-${id}`);

  if (el) {
    const isHidden = el.classList.contains('hidden');
    if (isHidden) {
      el.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
      // Renderitza fórmules que puguin estar dins de la solució
      initMathRendering();
    } else {
      el.classList.add('hidden');
      if (icon) icon.classList.remove('rotate-180');
    }
  }
}

/**
 * Modal d'Unitats Didàctiques que s'afegiran properament
 */
function showUpcomingModal(unitTitle) {
  const titleEl = document.getElementById('upcomingUnitTitle');
  if (titleEl) titleEl.textContent = unitTitle;

  const modal = document.getElementById('upcomingModal');
  if (modal) modal.classList.remove('hidden');
}

function closeUpcomingModal() {
  const modal = document.getElementById('upcomingModal');
  if (modal) modal.classList.add('hidden');
}

/**
 * CALCULADORA DE DISSOLUCIONS INTERACTIVA
 */
function openCalculatorModal() {
  const modal = document.getElementById('calculatorModal');
  if (modal) modal.classList.remove('hidden');
}

function closeCalculatorModal() {
  const modal = document.getElementById('calculatorModal');
  if (modal) modal.classList.add('hidden');
}

function setCalcMode(mode) {
  const paneM = document.getElementById('calcPaneMolarity');
  const paneD = document.getElementById('calcPaneDilution');
  const btnM = document.getElementById('calcModeMolarity');
  const btnD = document.getElementById('calcModeDilution');

  if (mode === 'molarity') {
    paneM.classList.remove('hidden');
    paneD.classList.add('hidden');
    btnM.classList.add('border-sky-600', 'text-sky-700');
    btnM.classList.remove('border-transparent', 'text-slate-500');
    btnD.classList.remove('border-sky-600', 'text-sky-700');
    btnD.classList.add('border-transparent', 'text-slate-500');
  } else {
    paneM.classList.add('hidden');
    paneD.classList.remove('hidden');
    btnD.classList.add('border-indigo-600', 'text-indigo-700');
    btnD.classList.remove('border-transparent', 'text-slate-500');
    btnM.classList.remove('border-sky-600', 'text-sky-700');
    btnM.classList.add('border-transparent', 'text-slate-500');
  }
}

function onSelectSoluteChange() {
  const select = document.getElementById('calcSoluteSelect');
  const customDiv = document.getElementById('calcCustomMmDiv');
  if (select.value === 'custom') {
    customDiv.classList.remove('hidden');
  } else {
    customDiv.classList.add('hidden');
  }
}

function calculateMolarity() {
  const select = document.getElementById('calcSoluteSelect');
  let mm = parseFloat(select.value);

  if (select.value === 'custom') {
    mm = parseFloat(document.getElementById('calcCustomMm').value);
  }

  const mass = parseFloat(document.getElementById('calcMass').value);
  const volumeMl = parseFloat(document.getElementById('calcVolume').value);

  const resultDiv = document.getElementById('calcMolarityResult');
  const valueEl = document.getElementById('molarityValue');
  const detailsEl = document.getElementById('molarityDetails');

  if (isNaN(mm) || isNaN(mass) || isNaN(volumeMl) || volumeMl <= 0 || mm <= 0 || mass < 0) {
    alert('Si us plau, introdueix valors numèrics vàlids per a la massa, volum i massa molar.');
    return;
  }

  const volumeL = volumeMl / 1000;
  const moles = mass / mm;
  const molarity = moles / volumeL;
  const concGL = mass / volumeL;

  valueEl.textContent = `${molarity.toFixed(4)} M (mol/L)`;
  detailsEl.textContent = `Solut: ${moles.toFixed(4)} mol en ${volumeL} L | Concentració: ${concGL.toFixed(2)} g/L`;
  resultDiv.classList.remove('hidden');
}

function calculateDilution() {
  const c1 = parseFloat(document.getElementById('calcDilC1').value);
  const v1Input = document.getElementById('calcDilV1').value;
  const c2 = parseFloat(document.getElementById('calcDilC2').value);
  const v2Input = document.getElementById('calcDilV2').value;

  const resultDiv = document.getElementById('calcDilutionResult');
  const valueEl = document.getElementById('dilutionValue');
  const detailsEl = document.getElementById('dilutionDetails');

  const v1 = v1Input !== '' ? parseFloat(v1Input) : NaN;
  const v2 = v2Input !== '' ? parseFloat(v2Input) : NaN;

  // Determinar quina variable és la incògnita
  if (isNaN(v1) && !isNaN(c1) && !isNaN(c2) && !isNaN(v2)) {
    // Buscar V1
    if (c1 <= 0) return alert('C1 ha de ser major que zero.');
    const calcV1 = (c2 * v2) / c1;
    valueEl.textContent = `V₁ = ${calcV1.toFixed(2)} mL`;
    detailsEl.textContent = `Pipetejar ${calcV1.toFixed(2)} mL de dissolució concentrada (${c1} M) i enrasar fins a ${v2} mL amb aigua.`;
    resultDiv.classList.remove('hidden');
  } else if (isNaN(c2) && !isNaN(c1) && !isNaN(v1) && !isNaN(v2)) {
    // Buscar C2
    if (v2 <= 0) return alert('V2 ha de ser major que zero.');
    const calcC2 = (c1 * v1) / v2;
    valueEl.textContent = `C₂ = ${calcC2.toFixed(4)} M`;
    detailsEl.textContent = `La concentració final obtinguda és de ${calcC2.toFixed(4)} M.`;
    resultDiv.classList.remove('hidden');
  } else if (isNaN(v2) && !isNaN(c1) && !isNaN(v1) && !isNaN(c2)) {
    // Buscar V2
    if (c2 <= 0) return alert('C2 ha de ser major que zero.');
    const calcV2 = (c1 * v1) / c2;
    valueEl.textContent = `V₂ = ${calcV2.toFixed(2)} mL`;
    detailsEl.textContent = `El volum final al qual cal diluir és de ${calcV2.toFixed(2)} mL.`;
    resultDiv.classList.remove('hidden');
  } else {
    alert('Omple exactament 3 de les 4 caselles per calcular la incògnita restant (per exemple, deixa V₁ buit per saber quant volum cal pipetejar).');
  }
}
