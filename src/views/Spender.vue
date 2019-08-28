<template>
  <div class="spender">
    <section
      class="header"
      :class="{'header__revenue': revenueMode}"
    >
      <div
        class="header__hamburger"
        @click="$emit('sidebarToggle')"
      />
      <div class="header__row">
        <div
          v-show="!revenueMode"
          class="view-name"
          @click="revenueMode = true"
        >
          Расходы
        </div>
        <div
          v-show="revenueMode"
          class="view-name"
          @click="revenueMode = false"
        >
          Доходы
        </div>

        <div
          class="account"
          @click="showAccaunts = !showAccaunts"
        >
          <div class="account__type">
            <span>Каспи</span>
          </div>
          <div
            class="account__type-dropdown"
            :class="{'account__type-dropdown--show': showAccaunts}"
          >
            <ul>
              <li>
                <span>Forte</span>
                <span>33 000 тг.</span>
              </li>
              <li>
                <span>Наличные</span>
                <span>33 000 тг.</span>
              </li>
              <li>
                <span>Home</span>
                <span>33 000 тг.</span>
              </li>
            </ul>
          </div>
          <span class="balance">456 223 тг.</span>
        </div>

        <div class="header__balance">
          <span>Общий остаток:</span>
          <span class="sum">2 458 000 тг.</span>
          <span>Хватит до <b>2 октября</b></span>
        </div>
      </div>
    </section>
    <section class="calc">
      <span
        v-show="calcField !== 0"
        class="calc__field"
      >{{ calcField }}</span>
      <span
        v-show="calcField === 0 && !revenueMode"
        class="calc__field"
      >Введите расход</span>
      <span
        v-show="calcField === 0 && revenueMode"
        class="calc__field"
      >Введите доход</span>
      <table>
        <tr>
          <td @click="calcAdd">
            +
          </td>
          <td @click="calcAppend(1)">
            1
          </td>
          <td @click="calcAppend(2)">
            2
          </td>
          <td @click="calcAppend(3)">
            3
          </td>
        </tr>
        <tr>
          <td @click="calcSubtract">
            -
          </td>
          <td @click="calcAppend(4)">
            4
          </td>
          <td @click="calcAppend(5)">
            5
          </td>
          <td @click="calcAppend(6)">
            6
          </td>
        </tr>
        <tr>
          <td @click="calcMultiply">
            x
          </td>
          <td @click="calcAppend(7)">
            7
          </td>
          <td @click="calcAppend(8)">
            8
          </td>
          <td @click="calcAppend(9)">
            9
          </td>
        </tr>
        <tr>
          <td @click="calcDivide">
            ÷
          </td>
          <td
            class="c"
            @click="calcDecimal"
          >
            .
          </td>
          <td @click="calcAppend(0)">
            0
          </td>
          <td
            class="c"
            @click="calcClear"
          >
            C
          </td>
        </tr>
        <td
          colspan="4"
          @click="calcEqual"
        >
          =
        </td>
        <tr />
      </table>
    </section>
    <section class="categories">
      <div>
        <div class="ic-folder" />
        <span>Статьи</span>
      </div>
      <div>
        <div class="ic-bill" />
        <span>Кафе</span>
      </div>
      <div>
        <div class="ic-apple" />
        <span>Продукты</span>
      </div>
      <div>
        <div class="ic-label" />
        <span>Химия</span>
      </div>
      <div>
        <div class="ic-car" />
        <span>Авто/Такси</span>
      </div>
      <div>
        <div class="ic-drama" />
        <span>Досуг</span>
      </div>
      <div>
        <div class="ic-ambulance" />
        <span>Медицина</span>
      </div>
      <div>
        <div class="ic-home" />
        <span>Дом</span>
      </div>
    </section>
    <section class="journal">
      <header>
        <span>Потрачено сегодня: 10 тг.</span>
      </header>
      <div class="journal__items">
        <div class="journal__item-row">
          <div class="icon ic-apple" />
          <div class="details">
            <div class="item">
              <span>Продукты</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>1500 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
        <div class="journal__item-row">
          <div class="icon ic-car" />
          <div class="details">
            <div class="item">
              <span>Авто/Такси</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>600 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
        <div class="journal__item-row">
          <div class="icon ic-drama" />
          <div class="details">
            <div class="item">
              <span>Досуг</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>18000 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
        <div class="journal__item-row">
          <div class="icon ic-ambulance" />
          <div class="details">
            <div class="item">
              <span>Медицина</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>2600 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
        <div class="journal__item-row">
          <div class="icon ic-apple" />
          <div class="details">
            <div class="item">
              <span>Продукты</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>180 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
        <div class="journal__item-row">
          <div class="icon ic-apple" />
          <div class="details">
            <div class="item">
              <span>Продукты</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>6000 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
      </div>
      <header>
        <span>Потрачено вчера: 670 тг.</span>
      </header>
      <div class="journal__items">
        <div class="journal__item-row">
          <div class="icon ic-apple" />
          <div class="details">
            <div class="item">
              <span>Продукты</span>
              <span>Наличные</span>
            </div>
            <div class="sum-date">
              <span>1500 тг.</span>
              <span>01.08.19</span>
            </div>
          </div>
        </div>
      </div>
      <button class="journal__before-btn">
        Ранее
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Spender',
  data() {
    return {
      calcField: 0,
      calcPrevious: null,
      calcOperator: null,
      calcOperatorClicked: false,
      showAccaunts: false,
      revenueMode: false
    }
  },
  methods: {
    calcClear() {
      this.calcField = 0;
    },
    calcAppend(number) {
      if (this.calcOperatorClicked === true) {
        this.calcField = '';
        this.calcOperatorClicked = false;
      }
      this.calcField = this.calcField === 0 ? (this.calcField = number) : '' + this.calcField + number;
    },
    calcDecimal() {
      if (this.calcField.indexOf('.') === -1) {
        this.append('.');
      }
    },
    calcDivide() {
      this.calcOperator = (a, b) => a / b;
      this.calcPrevious = this.calcField;
      this.calcOperatorClicked = true;
    },
    calcMultiply() {
      this.calcOperator = (a, b) => a * b;
      this.calcPrevious = this.calcField;
      this.calcOperatorClicked = true;
    },
    calcSubtract() {
      this.calcOperator = (a, b) => a - b;
      this.calcPrevious = this.calcField;
      this.calcOperatorClicked = true;
    },
    calcAdd() {
      this.calcOperator = (a, b) => a + b;
      this.calcPrevious = this.calcField;
      this.calcOperatorClicked = true;
    },
    calcEqual() {
      this.calcField = this.calcOperator(Number(this.calcPrevious), Number(this.calcField));
      this.calcPrevious = null;
      this.calcOperatorClicked = true;
    }
  }
}
</script>
