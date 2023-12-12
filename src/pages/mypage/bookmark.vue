<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
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
</script>

<style lang="scss" scoped></style>
