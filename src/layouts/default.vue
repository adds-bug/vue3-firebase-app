<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-btn dense flat to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.png" />
            </q-avatar>
            ADASH
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://naver.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유튜브"
          href="https://youtube.com"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        />
        <q-btn round flat>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import AuthDialog from 'src/components/auth/AuthDialog.vue';

// drawer
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// meta info
const route = useRoute();
// debugger;
const pageContainerStyles = computed(() => ({
  maxWidth: route.meta.width || '1080px',
  margin: '0 auto',
}));

// dialog
const authDialog = ref(false); // TODO 이게, 첫 페이지 로딩 되자마자 true면 걍 바로 시작되니까. 그렇게 가보자.
const openAuthDialog = () => (authDialog.value = true);
</script>
