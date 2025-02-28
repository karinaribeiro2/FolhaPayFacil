# 💸 FolhaPayFacil: Cálculo de Folha de Pagamento

## 📌 Descrição
**FolhaPayFAcil** é uma aplicação web desenvolvida em **HTML, CSS e JavaScript** para calcular a folha de pagamento de funcionários de uma rede hoteleira. A aplicação recebe dados como o código do funcionário, número de horas trabalhadas, turno de trabalho, categoria e salário mínimo estadual, e realiza os cálculos do valor da hora trabalhada, salário inicial, auxílio alimentação e salário final.

---

## 🎯 Funcionalidade
O usuário informa as seguintes informações para cada funcionário:

- **Código do Funcionário**
- **Número de Horas Trabalhadas no Mês**
- **Turno de Trabalho** → (M - Matutino, V - Vespertino, N - Noturno)
- **Categoria** → (F - Funcionário, G - Gerente)
- **Salário Mínimo Estadual**

Com esses dados, a aplicação realiza os seguintes cálculos:

1. **Valor da Hora Trabalhada:**
- Gerente no turno M ou V: 4% do salário mínimo estadual
- Funcionário no turno N: 2% do salário mínimo estadual
- Funcionário nos turnos M ou V: 1% do salário mínimo estadual

2. **Salário Inicial:** Número de horas trabalhadas multiplicado pelo valor da hora trabalhada.

3. **Auxílio-Alimentação:**
- Até R$ 800,00: 25% do salário inicial
- Acima de R$ 800,00 até R$ 1.200,00: 20% do salário inicial
- Acima de R$ 1.200,00: 15% do salário inicial

4. **Salário Final:** Salário inicial + auxílio alimentação

---

## 🛠 Tecnologias Utilizadas
- 🌐 **HTML** → Estrutura da interface
- 🎨 **CSS** → Estilização dos elementos
- 🚀 **JavaScript** → Lógica da aplicação

---

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/FolhaPayFacil.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd FolhaPayFacil
   ```
3. Abra o arquivo **index.html** em um navegador.

---

## 📂 Estrutura do Projeto
```
EtariX/
│-- index.html          # Interface principal
│-- script.js     # Script para cálculo da faixa etária
│-- style.css           # Estilos da aplicação
│-- README.md           # Documentação do projeto
```

---

## 📜 Licença
Este projeto foi desenvolvido para fins educacionais e pode ser utilizado livremente.

