<template>
  <div class="tags-page">
    <div class="tags-container">
      <div
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ selected: selectedTag === tag }"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import api from "@/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tags',
  components: {
    Footer
  },
  data() {
    return {
      tags: [],
      selectedTag: null
    };
  },
  async mounted() {
    try {
      const response = await api.get('/tags/');
      this.tags = response.data;
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  },

  methods: {
    selectTag(tag) {
      this.selectedTag = tag;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.tags-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 50px; /* чтобы был отступ для футера */
}
.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #B5A688;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}
.tag.selected {
  border: 3px solid yellow;
}
</style>