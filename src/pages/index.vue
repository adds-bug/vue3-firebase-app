<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
    <PostWriteDialog v-model="postDialog" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from 'src/pages/components/PostHeader.vue';
import PostRightBar from 'src/pages/components/PostRightBar.vue';
import PostLeftBar from 'src/pages/components/PostLeftBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';

import { uid } from 'quasar';
import { VueElement } from 'vue';

const router = useRouter();
// const goPostDetails = id => {
//   router.push(`/posts/${id}`);
// };

const posts = Array.from(Array(20), (_, index) => ({
  id: 'a' + index,
  title: 'Vue3 Firebase 강의' + index,
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, excepturi quibusdam illum provident unde, soluta maxime in non rem consectetur voluptatem et totam inventore, aperiam incidunt pariatur facere porro minus.',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  category: '카테고리' + index,
  uid: 'uid',
}));

const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};
</script>

<style lang="scss" scoped></style>
