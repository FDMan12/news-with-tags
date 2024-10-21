<template>
  <div class="tags-list">
    <div
      class="tag"
      v-for="(tag, index) in selectedTags"
      :key="index"
      :class="{ selected: isSelected(tag) }"
    >
      {{ tag.tag_name }}/{{ tag.category }}
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import api from '@/api';

export default {
  name: 'TagsList',
  data() {
    return {
      tags: [],
      selectedTags: [],
    };
  },
  async mounted() {
    try {
      const response = await api.getTags();
      this.tags = response.data;
      this.selectedTags = this.getSavedTags();
      console.log('Selected tags: ', this.selectedTags);
      this.$emit('update-tags', this.selectedTags);
    } catch (error) {
      console.error('Ошибка при получении тегов:', error);
    }
  },
  methods: {
    isSelected(tag) {
      return this.selectedTags.includes(tag);
    },
    getSavedTags() {
      const savedTags = Cookies.get('selectedTags');
      return savedTags ? JSON.parse(savedTags) : [];
    },
  },
};
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: 8px 12px;
  margin: 4px;
  border-radius: 50%;
  background-color: lightgray;
  cursor: pointer;
}

.selected {
  background-color: #42b983;
}
</style>
