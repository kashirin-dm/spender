<template>
  <div>
    <app-sidebar 
      :sidebar-show="sidebarShow"
      @sidebarToggle="sidebarToggle"
    />
    <router-view @sidebarToggle="sidebarToggle" />
  </div>
</template>
<script>
import '@/assets/scss/styles.scss'
import AppSidebar from '@/components/AppSidebar.vue'
export default {
  components: {
    AppSidebar
  },
  data() {
    return {
      sidebarShow: false
    }
  },
  methods: {
    sidebarToggle() {
      this.sidebarShow = !this.sidebarShow
    }
  }
}
</script>


