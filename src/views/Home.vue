<template>
<div class="spender">
  <nav class="sidebar">
    <ul>
      <li>Расходы</li>
      <li>Доходы</li>
      <li>Долги</li>
      <li>Займы</li>
      <li>Счета</li>
      <li>Аналитика</li>
    </ul>
  </nav>

  <section class="header">
    <div class="header__hamburger"></div>
    <div class="header__row">
        <div>Расходы</div>
        <div class="header__balance">
          <span>Общий остаток:</span>
          <span class="sum">2 458 000 тг.</span>
          <span>Хватит до <b>2 октября</b></span>
        </div>
    </div>
  </section>
  <section class="calc">
    <span class="calc__field" v-show="calcField !== 0">{{ calcField }}</span>
    <span class="calc__field" v-show="calcField === 0">Введите расход</span>
    <table>
      <tr>
        <td @click="calcAdd">+</td>
        <td @click="calcAppend(1)">1</td>
        <td @click="calcAppend(2)">2</td>
        <td @click="calcAppend(3)">3</td>
      </tr>
      <tr>
        <td @click="calcSubtract">-</td>
        <td @click="calcAppend(4)">4</td>
        <td @click="calcAppend(5)">5</td>
        <td @click="calcAppend(6)">6</td>
      </tr>
      <tr>
        <td @click="calcMultiply">x</td>
        <td @click="calcAppend(7)">7</td>
        <td @click="calcAppend(8)">8</td>
        <td @click="calcAppend(9)">9</td>
      </tr>
      <tr>
        <td @click="calcDivide">÷</td>
        <td @click="calcDecimal" class="c">.</td>
        <td @click="calcAppend(0)">0</td>
        <td @click="calcClear" class="c">C</td>
      </tr>
        <td colspan="4" @click="calcEqual">=</td>
      <tr>
      </tr>
    </table>
  </section>
  <section class="categories">
    <div>
      <div class="ic-folder"></div>
      <span>Статьи</span>
    </div>
    <div>
      <div class="ic-bill"></div>
      <span>Кафе</span>
    </div>
    <div>
      <div class="ic-apple"></div>
      <span>Продукты</span>
    </div>
    <div>
      <div class="ic-label"></div>
      <span>Химия</span>
    </div>
    <div>
      <div class="ic-car"></div>
      <span>Авто/Такси</span>
    </div>
    <div>
      <div class="ic-drama"></div>
      <span>Досуг</span>
    </div>
    <div>
      <div class="ic-ambulance"></div>
      <span>Медицина</span>
    </div>
    <div>
      <div class="ic-home"></div>
      <span>Дом</span>
    </div>
  </section>
  <section class="journal">
    <header>
      <span>Потрачено сегодня: 10 тг.</span>
    </header>
    <div class="journal__items">
      <div class="journal__item-row">
        <div class="icon ic-apple"></div>
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
        <div class="icon ic-car"></div>
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
        <div class="icon ic-drama"></div>
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
        <div class="icon ic-ambulance"></div>
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
        <div class="icon ic-apple"></div>
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
        <div class="icon ic-apple"></div>
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

  </section>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Spender',
  data() {
    return {
      calcField: 0,
      calcPrevious: null,
      calcOperator: null,
      calcOperatorClicked: false
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
