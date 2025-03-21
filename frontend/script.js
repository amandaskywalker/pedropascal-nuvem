// Função para buscar e exibir os dados de Pedro Pascal
async function loadPedroPascalData() {
  try {
      // Busca o arquivo JSON
      const response = await fetch('http://backend:25000/data');
      if (!response.ok) {
          throw new Error('Erro ao carregar o JSON');
      }
      const data = await response.json();

      // Criando o conteúdo dinâmico
      const content = `
          <div class="home-text">
              <h2>${data.name} <i class="${data.icon}"></i></h2>
              <h3>Ator</h3>
              <p>${data.miniBio}</p>
              <div class="home-btn">
                  <a href="#" class="btn">Informações de Contato</a>
                  <a href="#" class="btn">Baixar CV <i class="ph ph-read-cv-logo"></i></a>
              </div>
          </div>
          <div class="home-img">
              <img src="img/zepedro.png" alt="Pedro Pascal" />
          </div>
      `;

      // Inserindo o conteúdo na seção home
      document.querySelector('.home').innerHTML = content;
  } catch (error) {
      console.error('Erro:', error);
      document.querySelector('.home').innerHTML = `<p class="error">Erro ao carregar os dados.</p>`;
  }
}

// Carrega os dados quando a página é aberta
loadPedroPascalData();