<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}">King of Bots</router-link>
      <div class="collapse navbar-collapse justify-content-center" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'pk_index'}">对战</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'record_index'}">对局列表</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'ranklist_index'}">排行榜</router-link>
          </li>
        </ul>

        <!-- 图标放在这里 -->
        <img src="@/assets/images/image.png" alt="Logo" class="navbar-logo">

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bobby
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="{name: 'user_bot_index'}">我的bot</router-link>
              </li>
              <li><a class="dropdown-item"></a></li>
              <li><a class="dropdown-item" href="#">退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();
    let route_name = computed(() => route.name);
    return {
      route_name
    };
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.collapse {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.navbar-nav {
  display: flex;
}

.navbar-logo {
  height: 50px; /* 图标的大小 */
  margin-left: 10px; /* 图标距离左侧的空间，减少这个值会使图标向中间移动 */
  margin-right: 280px; /* 图标距离右侧的空间，减少这个值也会使图标向中间移动 */
  /* 你可以调整上面两个值以改变图标的左右位置 */
}
</style>
