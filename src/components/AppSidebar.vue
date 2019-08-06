<template>
<nav class="sidebar" :class="{'sidebar--show-sidebar': sidebarShow}">
  <section class="sidebar__nav">
    <div class="sidebar__app-title">
      Spender
      <span>
        0.0.1
      </span>
    </div>
    <ul>
      <li class="active">
        <span class="consume"></span>
        <span>Расходы</span>
      </li>
      <li>
        <span class="revenue"></span>
        <span>Доходы</span>
      </li>
      <li>
        <span class="credits"></span>
        <span>Долги</span>
      </li>
      <li>
        <span class="lend"></span>
        <span>Займы</span>
      </li>
      <li>
        <span class="accounts"></span>
        <span>Счета</span>
      </li>
      <li>
        <span class="analytics"></span>
        <span>Аналитика</span>
      </li>
    </ul>
  </section>
  <section class="sidebar__closer" :class="{'sidebar--closed': !sidebarShow}" @click="$emit('sidebarToggle')">
  </section>
</nav>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    sidebarShow: Boolean
  }
}
</script>