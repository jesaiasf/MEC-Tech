// Dados simulados de faculdades por estado
const collegesData = {
"AC": [{ name: "Universidade Federal do Acre (UFAC)", city: "Rio Branco" }],
  "AL": [{ name: "Universidade Federal de Alagoas (UFAL)", city: "Maceió" }],
  "AM": [{ name: "Instituto Federal do Amazonas (IFAM)", city: "Manaus" }],
  "AP": [{ name: "Universidade Federal do Amapá (UNIFAP)", city: "Macapá" }],
  "BA": [
    { name: "Universidade Federal da Bahia (UFBA)", city: "Salvador" },
    { name: "Instituto Federal da Bahia (IFBA)", city: "Salvador" }
  ],
  "CE": [
    { name: "Universidade Federal do Ceará (UFC)", city: "Fortaleza" },
    { name: "Instituto Federal do Ceará (IFCE)", city: "Fortaleza" }
  ],
  "DF": [
    { name: "Universidade de Brasília (UnB)", city: "Brasília" },
    { name: "Instituto Federal de Brasília (IFB)", city: "Brasília" }
  ],
  "ES": [{ name: "Universidade Federal do Espírito Santo (UFES)", city: "Vitória" }],
  "GO": [
    { name: "Universidade Federal de Goiás (UFG)", city: "Goiânia" },
    { name: "Instituto Federal Goiano (IFG)", city: "Goiânia" }
  ],
  "MA": [{ name: "Universidade Federal do Maranhão (UFMA)", city: "São Luís" }],
  "MT": [
    { name: "Universidade Federal de Mato Grosso (UFMT)", city: "Cuiabá" },
    { name: "Instituto Federal de Mato Grosso (IFMT)", city: "Cuiabá" }
  ],
  "MS": [{ name: "Universidade Federal de Mato Grosso do Sul (UFMS)", city: "Campo Grande" }],
  "MG": [
    { name: "Universidade Federal de Minas Gerais (UFMG)", city: "Belo Horizonte" },
    { name: "Instituto Federal de Minas Gerais (IFMG)", city: "Belo Horizonte" }
  ],
  "PA": [{ name: "Universidade Federal do Pará (UFPA)", city: "Belém" }],
  "PB": [{ name: "Universidade Federal da Paraíba (UFPB)", city: "João Pessoa" }],
  "PR": [
    { name: "Universidade Federal do Paraná (UFPR)", city: "Curitiba" },
    { name: "Universidade Tecnológica Federal do Paraná (UTFPR)", city: "Curitiba" }
  ],
  "PE": [
    { name: "Universidade Federal de Pernambuco (UFPE)", city: "Recife" },
    { name: "Instituto Federal de Pernambuco (IFPE)", city: "Recife" }
  ],
  "PI": [{ name: "Universidade Federal do Piauí (UFPI)", city: "Teresina" }],
  "RJ": [
    { name: "Universidade Federal do Rio de Janeiro (UFRJ)", city: "Rio de Janeiro" },
    { name: "Instituto Federal do Rio de Janeiro (IFRJ)", city: "Rio de Janeiro" }
  ],
  "RN": [
    { name: "Universidade Federal do Rio Grande do Norte (UFRN)", city: "Natal" },
    { name: "Instituto Federal do Rio Grande do Norte (IFRN)", city: "Natal" }
  ],
  "RS": [
    { name: "Universidade Federal do Rio Grande do Sul (UFRGS)", city: "Porto Alegre" },
    { name: "Instituto Federal do Rio Grande do Sul (IFRS)", city: "Porto Alegre" }
  ],
  "RO": [{ name: "Universidade Federal de Rondônia (UNIR)", city: "Porto Velho" }],
  "RR": [{ name: "Universidade Federal de Roraima (UFRR)", city: "Boa Vista" }],
  "SC": [
    { name: "Universidade Federal de Santa Catarina (UFSC)", city: "Florianópolis" },
    { name: "Instituto Federal de Santa Catarina (IFSC)", city: "Florianópolis" }
  ],
  "SE": [{ name: "Universidade Federal de Sergipe (UFS)", city: "Aracaju" }],
  "SP": [
    { name: "Universidade de São Paulo (USP)", city: "São Paulo" },
    { name: "Universidade Estadual de Campinas (UNICAMP)", city: "Campinas" }
  ],
  "TO": [{ name: "Universidade Federal do Tocantins (UFT)", city: "Palmas" }]
};

// Configuração do Mapa (Leaflet)
const map = L.map('brazilMap').setView([-15, -55], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adiciona estados clicáveis (simplificado)
const stateBounds = {
  "AC": [[-11.0, -73.0], [-7.5, -66.5]],
  "AL": [[-10.7, -38.0], [-8.5, -35.5]],
  "AM": [[-9.8, -73.0], [1.0, -56.0]],
  "AP": [[3.5, -54.0], [5.5, -49.5]],
  "BA": [[-18.0, -46.5], [-10.5, -37.0]],
  "CE": [[-7.8, -41.5], [-2.5, -37.0]],
  "DF": [[-16.0, -48.2], [-15.5, -47.5]],
  "ES": [[-21.3, -41.8], [-17.9, -39.5]],
  "GO": [[-19.5, -52.0], [-13.5, -45.5]],
  "MA": [[-7.5, -48.0], [-1.0, -41.5]],
  "MT": [[-18.0, -61.0], [-7.0, -50.5]],
  "MS": [[-24.0, -58.0], [-17.5, -51.0]],
  "MG": [[-22.9, -51.0], [-14.2, -39.5]],
  "PA": [[-9.5, -58.0], [1.0, -46.0]],
  "PB": [[-8.5, -38.5], [-6.0, -34.5]],
  "PR": [[-26.5, -54.5], [-22.5, -48.5]],
  "PE": [[-9.5, -41.5], [-7.0, -34.5]],
  "PI": [[-11.0, -45.5], [-5.0, -41.0]],
  "RJ": [[-23.5, -45.0], [-20.7, -40.5]],
  "RN": [[-6.5, -38.0], [-4.5, -34.5]],
  "RS": [[-34.0, -58.0], [-27.0, -49.5]],
  "RO": [[-13.5, -65.0], [-7.5, -59.5]],
  "RR": [[0.5, -64.5], [5.5, -59.0]],
  "SC": [[-29.5, -53.5], [-25.5, -48.5]],
  "SE": [[-11.5, -38.0], [-9.5, -36.0]],
  "SP": [[-24.5, -53.2], [-19.8, -44.0]],
  "TO": [[-13.5, -50.5], [-5.0, -45.5]]
  // Outros estados...
};

Object.keys(stateBounds).forEach(state => {
  const bounds = stateBounds[state];
  const rect = L.rectangle(bounds, {
    color: "#006633",
    weight: 2,
    fillOpacity: 0.1,
    fillColor: "#4CAF50"
  }).addTo(map);

  rect.on('click', () => showColleges(state));
});

// Mostra faculdades do estado selecionado
function showColleges(state) {
  const regionTitle = document.getElementById('regionTitle');
  const collegesList = document.getElementById('collegesList');

  regionTitle.textContent = `Faculdades em ${state}`;
  collegesList.innerHTML = '';

  if (collegesData[state]) {
    collegesData[state].forEach(college => {
      const li = document.createElement('li');
      li.textContent = `${college.name} (${college.city})`;
      collegesList.appendChild(li);
    });
  } else {
    collegesList.innerHTML = '<li>Nenhuma faculdade encontrada.</li>';
  }
}

// Busca por estado
document.getElementById('searchBtn').addEventListener('click', () => {
  const input = document.getElementById('searchInput').value.toUpperCase();
  if (collegesData[input]) {
    showColleges(input);
  } else {
    alert("Estado não encontrado. Exemplos: SP, RJ, MG");
  }
});

// Modal de Login (mesmo código anterior)
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', () => modal.style.display = 'block');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});