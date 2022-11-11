<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="main-content">
      <h2>PIX Explorer</h2>
      <p>
        <strong>Tranferências</strong> e <strong>pagamentos</strong> por PIX
        mais seguros e confiáveis com o sitema “PIX Eplorer” garantindo a
        <strong>autenticidade da operações</strong> de forma rápida e
        descomplicada.
      </p>
      <span>© 2022 Doiim. All rights reserved.</span>
    </div>
    <form class="main-form">
      <h3>Validar Transação</h3>
      <p>
        Comprove a autenticidade de qualquer transação Pix de forma prática e
        rápida.
      </p>
      <label>Chave Pix</label>
      <br />
      <input type="text" placeholder="Insira a chave PIX" />
      <br />
      <label>Valor</label>
      <br />
      <input type="text" placeholder="Insira o valor da transação"/>
      <br />
      <label>ID da Transação</label>
      <br />
      <input type="text" placeholder="Insira o ID da transação"/>
      <br />
      <button>Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 3fr 4fr;
  color: black;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #34BDAD 60%, var(--vt-c-white) 40%);
}

.main-content {
  padding-left: 120px;
  padding-top: 100px;
  width: 825px;
  color: var(--vt-c-white);
}

.main-content h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 180px;
}

.main-content p {
  padding-left: 20px;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 300px;
}

.main-content strong {
  font-size: 28px;
  font-weight: 700;
}

.main-form {
  background-color: var(--vt-c-white-soft);
  border-radius: 20px;
  padding: 72px 80px 0 80px;
  margin: 124px 86px;
  color:#4F4F4F;
  width: 625px;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 5px 5px;
}

.main-form h3 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 5px;
}

.main-form p {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
}

.main-form label {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  display: inline-block;
}

.main-form input {
  width: 100%;
  font-size: 16px;
  padding: 6px 8px 6px 8px;
  font-weight: 400;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #00000033;
}

.main-form button {
  margin-top: 25px;
  width: 100%;
  font-size: 24px;
  padding: 10px;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: #34BDAD;
  color: var(--vt-c-white);
  cursor: pointer;
}

input::placeholder{
  color: #CBCBCB;
  font-weight: 400;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
