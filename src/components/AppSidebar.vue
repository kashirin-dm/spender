<template>
  <nav
    class="sidebar"
    :class="{'sidebar--show-sidebar': sidebarShow}"
  >
    <section class="sidebar__nav">
      <div class="sidebar__app-title">
        Spender
        <span>
          0.0.1
        </span>
      </div>
      <ul>
        <li
          :class="{ 'active' : $route.name === 'Spender'}"
          @click="$router.push('/')"
        >
          <span class="consume" />
          <span>Расходы</span>
        </li>
        <li>
          <span class="revenue" />
          <span>Доходы</span>
        </li>
        <li>
          <span class="credits" />
          <span>Долги</span>
        </li>
        <li>
          <span class="lend" />
          <span>Займы</span>
        </li>
        <li
          :class="{ 'active' : $route.name === 'Accounts'}"
          @click="$router.push('/accounts')"
        >
          <span class="accounts" />
          <span>Счета</span>
        </li>
        <li>
          <span class="analytics" />
          <span>Аналитика</span>
        </li>
      </ul>
    </section>
    <section
      class="sidebar__closer"
      :class="{'sidebar--closed': !sidebarShow}"
      @click="$emit('sidebarToggle')"
    />
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