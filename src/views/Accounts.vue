<template>
  <div class="spender">
    <section class="header">
      <div class="header__hamburger" @click="$emit('sidebarToggle')" />
      <div class="header__row">
        <div class="view-name">
          Счета и переводы
        </div>

        <div class="header__balance">
          <span>Общий остаток:</span>
          <span class="sum">{{ generalHeaderSum() }} тг.</span>
          <span>Хватит до <b>2 октября</b></span>
        </div>
      </div>
    </section>
    <nav class="accounts-tabs">
      <div :class="{'active': UITab === 'accounts'}" @click="UITab = 'accounts'">
        Счета
      </div>
      <div :class="{'active': UITab === 'transfers'}" @click="UITab = 'transfers'">
        Переводы
      </div>
    </nav>
    <section v-if="UITab === 'accounts'" class="accounts-list">
      <div
        v-for="account in localStorage.accounts"
        :key="account.id"
        @click="openOverlay('edit', account)"
      >
        <span class="title">
          <span>{{ account.title }}</span>
          <span class="title__type">{{ accountType(account.type) }}</span>
        </span>
        <span>
          <span v-if="account.currency === 'USD'">{{ currencyType(account.currency) }}</span> 
          {{ numToLocString(account.balance) }} 
          <span v-if="account.currency !== 'USD'">{{ currencyType(account.currency) }}</span>
        </span>
      </div>
      <button @click="openOverlay('create')">
        Добавить счет
      </button>
    </section>
    <section v-if="UITab === 'transfers'" class="transfer-tab">
      <div>Переводим с</div>
      <select>
        <option v-for="account in localStorage.accounts" :key="account.id" value="account.id">{{ account.title }}</option>
      </select>
      <div>на</div>
      <select>
        <option v-for="account in localStorage.accounts" :key="account.id" value="account.id">{{ account.title }}</option>
      </select>
      <div>Сумма:</div>
      <input type="number" placeholder="Введите сумму" autocomplete="off">
      <div>Дата перевода</div>
      <input type="date">
      <textarea placeholder="Комментарий к переводу" autocomplete="off" />
      <button>Перевести</button>
    </section>
    <transition name="fade">
      <section v-if="UIOverlay" class="overlay">
        <div class="overlay__header">
          <div class="back-button" @click="closeOverlay" />
          <div class="row">
            <div v-if="overlayType === 'create'" class="overlay-name">
              Создание счета
            </div>
            <div v-if="overlayType === 'edit'" class="overlay-name">
              Редактирование счета
            </div>
          </div>
        </div>
        <div class="overlay__content">
          <div class="nobody">
            <input
              v-model="tempAccount.title"
              type="text"
              placeholder="Название счета"
              autocomplete="off"
            >
            <input
              v-model="tempAccount.balance"
              type="number"
              placeholder="Текущая сумма"
              autocomplete="off"
            >
            <select v-model="tempAccount.currency">
              <option value="KZT">KZT</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUR">RUR</option>
            </select>
            <select v-model="tempAccount.type">
              <option value="cash">Наличные</option>
              <option value="card">Карта</option>
              <option value="deposit">Депозит</option>
              <option value="online">Онлайн</option>
            </select>
            <textarea v-model="tempAccount.comment" placeholder="Комментарий" autocomplete="off" />

            <button v-if="overlayType === 'create'" @click="createAccount">
              Создать счет
            </button>
            <button v-if="overlayType === 'edit'" @click="editAccount">
              Внести изменения
            </button>
            <div v-if="overlayType === 'edit'" class="delete-link" @click="deleteAccount">
              Удалить счет
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Accounts',
  data() {
    return {
      UIOverlay: false,
      UITab: 'accounts',
      tempAccount: {
        title: '',
        type: 'cash',
        balance: 0,
        currency: 'KZT',
        comment: ''
      },
      overlayType: 'none'
    }
  },
  mounted() {
    if (this.localStorage.accounts.length === 0) {
      this.UIOverlay = true
      this.overlayType = 'create'
    }
  },
  methods: {
    generalHeaderSum() {
      let sum = 0
      this.localStorage.accounts.forEach(account => sum += +account.balance)
      return sum.toLocaleString()
    },
    openOverlay(type, data) {
      this.UIOverlay = true
      this.overlayType = type
      if (type === 'edit') {
        this.tempAccount = data;
      }
    },
    closeOverlay() {
      this.UIOverlay = false
      this.overlayType = 'none'
    },
    createAccount() {
      this.tempAccount.id = Math.round(100000 + Math.random() * (500000 + 1 - 100000))
      this.localStorage.accounts.push(this.tempAccount)
      this.tempAccount = {
        title: '',
        type: 'cash',
        balance: null,
        currency: 'KZT',
        comment: ''
      }
      this.overlayType = 'none'
      this.UIOverlay = false
    },
    editAccount() {
      this.localStorage.accounts = this.localStorage.accounts.map(account => {
        if (account.id === this.tempAccount.id) {
          return this.tempAccount
        }
        return account
      });
      this.tempAccount = {
        title: '',
        type: 'cash',
        balance: null,
        currency: 'KZT',
        comment: ''
      }
      this.overlayType = 'none'
      this.UIOverlay = false
    },
    deleteAccount() {
      const toDelete = new Set([this.tempAccount.id])
      this.localStorage.accounts = this.localStorage.accounts.filter(account => !toDelete.has(account.id)) 
      this.tempAccount = {
        title: '',
        type: 'cash',
        balance: null,
        currency: 'KZT',
        comment: ''
      }     
      this.overlayType = 'none'
      this.UIOverlay = false
    },
    numToLocString(num) {
      const n = +num
      return n.toLocaleString()
    },
    accountType(type) {
      switch (type) {
        case 'cash':
          return 'Наличные'
        case 'card':
          return 'Карта'
        case 'deposit':
          return 'Депозит'
        case 'online':
          return 'Онлайн'
        default:
          return type
      }
    },
    currencyType(currency) {
      switch (currency) {
        case 'KZT':
          return 'тг.'
        case 'RUR':
          return 'руб.'
        case 'USD':
          return '$'
        case 'EUR':
          return '€'
        default:
          return currency
      }
    }
  }
}
</script>

