<h1 align="center">Automação com Cypress - Automation Exercise</h1>
<h1 align="center">🎯 Casos de teste em andamento...</h1>


---

### ✅ **1. Registrar um novo usuário**
- Preenche nome e email no formulário de cadastro.
- Avança para a página de cadastro completo.
- Preenche todos os dados obrigatórios.
- Envia o formulário e verifica se a conta foi criada com sucesso.

### 🔐 **2. Login com email e senha corretos**
- Utiliza comando `cy.login(email, senha)` com os dados gerados.
- Realiza o login com sucesso.

### 🚪 **3. Logout da conta**
- Faz login.
- Verifica e clica no botão de logout.
- Verifica se redirecionou para a página de login.

### 🗑️ **4. Deletar conta**
- Faz login.
- Verifica e clica no botão "Delete Account".
- Confirma que a URL mudou para `/delete_account`.

### ❌ **5. Login com email e senha incorretos**
- Usa email inválido sem `@`.
- Usa senha inválida.
- Verifica que o navegador identificou o campo como inválido via `checkValidity()`.

---


### 📄 **1. Formulário de Contato

- Acessa a página inicial.
- Navega até a seção **Contact Us**.
- Preenche o formulário com dados gerados via `faker`.
- Realiza o upload de um arquivo `.txt` fictício.
- Submete o formulário e valida a mensagem de sucesso.

---


<li>Verificar detalhes de um produto</li>
<li>Pesquisar um produto</li>
<hr>
<li>Adicionar produto no carrinho</li>
<li>Verificar produto no carrinho</li>
<li>Remover produto do carrinho</li>

<hr>
<li>Fazer pedido</li>
<li>Fazer pedido sem conta logada</li>
<li>Adicionar avaliação no produto</li>
<hr>
<li>Ver categorias de produtos</li>
<hr>
<li>Verificar funcionalidade do botão top </li>

</ul>