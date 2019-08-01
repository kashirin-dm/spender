<template>
<div>
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
    <input v-model="calcField" placeholder="Введите расход">
    <table>
      <tr>
        <td>+</td>
        <td @click="calcField.push(1)">1</td>
        <td @click="calcField.push(2)">2</td>
        <td @click="calcField.push(3)">3</td>
      </tr>
      <tr>
        <td>-</td>
        <td @click="calcField.push(4)">4</td>
        <td @click="calcField.push(5)">5</td>
        <td @click="calcField.push(6)">6</td>
      </tr>
      <tr>
        <td>x</td>
        <td @click="calcField.push(7)">7</td>
        <td @click="calcField.push(8)">8</td>
        <td @click="calcField.push(9)">9</td>
      </tr>
      <tr>
        <td>÷</td>
        <td>.</td>
        <td @click="calcField.push(0)">0</td>
        <td @click="calcField.splice(-1,1)">⬅</td>
      </tr>
    </table>
  </section>
  <section class="categories">
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
    <div>
      <div></div>
      <span></span>
    </div>
  </section>
  <section class="journal">
    <header>
      <span>Потрачено сегодня: 10 тг.</span>
    </header>
    <div>
      <div>
        <div></div>
        <div>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
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
  components: {
    //HelloWorld
  },
  data() {
    return {
      calcField: []
    }
  }
}
</script>
