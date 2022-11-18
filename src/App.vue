<script lang="ts">
import Modal from "./components/CustomModal.vue";
import { validatePix } from "./services/pix";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      backdrop: false,
      rawSalary: "",
      errorModal: false,
      successModal: false,
      pix: { e2e_id: "", pix_key: "", pix_value: "" },
    };
  },
  methods: {
    async validatePix() {
      this.backdrop = true;
      const res = await validatePix(this.pix);
      this.backdrop = false;
      if (res) this.successModal = true;
      else this.errorModal = true;
    },
    changeCurrency(e: any) {
      this.pix.pix_value = e.target.value;
    },
  },
  computed: {
    formattedSalary() {
      return this.pix.pix_value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<template>
  <div class="main">
    <img src="./assets/cicle.png" id="cicle" />
    <img src="./assets/dots.png" id="dot1" />
    <img src="./assets/dots.png" id="dot2" />
    <img src="./assets/white-dot.png" id="dot3" />
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
      <input
        type="text"
        placeholder="Insira a chave PIX"
        v-model="pix.pix_key"
      />
      <br />
      <label>Valor</label>
      <br />

      <input
        type="number"
        :value="formattedSalary"
        @change="changeCurrency"
        placeholder="Insira o valor da transação"
      />

      <br />
      <label>ID da Transação</label>
      <br />
      <input
        type="text"
        placeholder="Insira o ID da transação"
        v-model="pix.e2e_id"
      />
      <br />
      <button
        @click="validatePix"
        type="button"
        :disabled="
          pix.e2e_id.length === 0 ||
          pix.pix_key.length === 0 ||
          pix.pix_value.length === 0
        "
      >
        Enviar
      </button>
    </form>
    <Modal
      class="modal"
      @close="() => (errorModal = false)"
      :modalActive="errorModal"
    >
      <div class="modal-not-find">
        <h1>Transação não encontrada</h1>
        <h3>
          Não foi possível localização a transação solicitada. Verifique os
          dados e tente novamente.
        </h3>
      </div>
    </Modal>
    <Modal
      class="modal"
      @close="() => (successModal = false)"
      :modalActive="successModal"
    >
      <div class="modal-find">
        <h1>Transação Encontrada</h1>
        <hr />
        <h2>Recebedor</h2>
        <h3>xxxxxxx</h3>
        <h2>Origem</h2>
        <h3>xxxxxxx</h3>
        <h2>Valor</h2>
        <h3>{{ pix.pix_value }}</h3>
        <h2>Data</h2>
        <h3>xxxxxxx</h3>
        <hr />
      </div>
    </Modal>

    <div id="backdrop" v-if="backdrop">
      <h1>Carregando...</h1>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 3fr 4fr;
  color: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(90deg, #34bdad 60%, var(--vt-c-white) 40%);
}

#backdrop {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #35353590;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}

#dot3 {
  width: 8%;
  position: absolute;
  left: 3%;
  bottom: 20%;
}

#dot2 {
  position: absolute;
  right: 15%;
  bottom: 5%;
}

#dot1 {
  position: absolute;
  right: 5%;
  top: 5%;
}

#cicle {
  width: 17%;
  position: absolute;
  right: 40%;
  bottom: 0;
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
  width: 625px;
  height: 750px;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 5px 5px;
}

.main-form h3 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.main-form p {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 50px;
}

.main-form label {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
  display: inline-block;
}

.main-form input {
  width: 100%;
  font-size: 18px;
  padding: 6px 8px 6px 8px;
  font-weight: 400;
  margin-bottom: 25px;
  border-radius: 6px;
  border: 1px solid #00000033;
}

.main-form button {
  margin-top: 30px;
  width: 100%;
  font-size: 26px;
  padding: 10px;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: #34bdad;
  color: var(--vt-c-white);
  cursor: pointer;
}

input::placeholder {
  color: #cbcbcb;
  font-weight: 400;
}

#circle {
  border-radius: 50%;
  box-shadow: 0px 0px 0px #34bdad, 0px 0px 0px 10px var(--vt-c-white),
    0px 0px 0px 50px #34bdad, 0px 0px 0px 60px var(--vt-c-white),
    0px 0px 0px 100px #34bdad, 0px 0px 0px 110px var(--vt-c-white),
    0px 0px 0px 150px #34bdad, 0px 0px 0px 160px var(--vt-c-white),
    0px 0px 0px 200px #34bdad, 0px 0px 0px 210px var(--vt-c-white);
  width: 300px;
  height: 300px;
  position: absolute;
  left: 45%;
  bottom: 30%;
}

.modal-not-find h1 {
  font-weight: 700;
  font-size: 36px;
}

.modal-no-find h3 {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
}

.modal-find h1 {
  font-weight: 700;
  font-size: 40px;
  color: #34bdad;
}

.modal-find hr {
  height: 1px;
  background-color: #34bdad;
  border: none;
  margin-bottom: 24px;
  width: 100%;
}

.modal-find h2 {
  font-weight: 500;
  font-size: 30px;
}

.modal-find h3 {
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 10px;
}

.modal-find h3:last-of-type {
  margin-bottom: 24px;
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

  .main-form button[disabled] {
    background-color: #cccccc;
    color: #666666;
  }
}
</style>
