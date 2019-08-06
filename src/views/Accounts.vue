<template>
<div class="spender">
  <section class="header">
    <div class="header__hamburger" @click="$emit('sidebarToggle')"></div>
    <div class="header__row">
        <div class="view-name">Счета и переводы</div>

        <div class="header__balance">
          <span>Общий остаток:</span>
          <span class="sum">{{ generalHeaderSum() }} тг.</span>
          <span>Хватит до <b>2 октября</b></span>
        </div>
    </div>
  </section>
  <nav class="accounts-tabs">
    <div class="active">Счета</div>
    <div>Переводы</div>
  </nav>
  <section class="accounts-list">
    <div v-for="account in localStorage.accounts" :key="account.id">
      <span>{{ account.title }}</span>
      <span>{{ account.balance }} {{ account.currency }}</span>
    </div>
    <button>Добавить счет</button>
  </section>
</div>
</template>
<script>
export default {
  mounted() {
    if (this.localStorage.accounts.length === 0) {
      this.localStorage.accounts = [
        {
          id: 1,
          title: "Наличные",
          type: "cash",
          balance: 10,
          currency: 'KZT'
        },
        {
          id: 2,
          title: "Дебетная карта",
          type: "card",
          balance: 10.43,
          currency: 'KZT'
        }
      ];
    }
  },
  methods: {
    generalHeaderSum() {
      let sum = 0;
      for (let i = 0; i < this.localStorage.accounts.length; i++) {
        sum += this.localStorage.accounts[i].balance;
      }
      return sum
    }
  }
}
</script>

