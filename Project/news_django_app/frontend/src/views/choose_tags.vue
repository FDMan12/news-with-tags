<template>
  <HeaderWide />
  <div class="tags-page">
    <div class="tags-container">
      <div
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ selected: isSelected(tag) }"
        @click="toggleTag(tag)"
      >
        {{ tag.tag_name }}/{{ tag.category }}
      </div>
    </div>
    <button @click="clearAllTags" class="clear-tags-button">Удалить все теги</button>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Cookies from 'js-cookie';
import api from "@/api";
import HeaderWide from "@/components/Header-wide.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tags',
  components: {
    HeaderWide,
    Footer
  },
  data() {
    return {
      tags: [],
      selectedTags: [],
    };
  },
  async mounted() {
    try {
      const response = await api.getTags();
      if (response.data && Array.isArray(response.data)) {
        this.tags = response.data;
        console.log('Fetched tags:', this.tags);
        this.selectedTags = this.getSavedTags();
        console.log('Loaded saved tags:', this.selectedTags);
      } else {
        console.error('Invalid tags data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  },

  methods: {
    toggleTag(tag) {
      const tagIndex = this.selectedTags.findIndex(t => t.tag_name === tag.tag_name && t.category === tag.category);
      if (tagIndex !== -1) {
        this.selectedTags.splice(tagIndex, 1);
        console.log(`Tag ${tag} removed. Selected tags:`, this.selectedTags);
      } else {
        this.selectedTags.push(tag);
        console.log(`Tag ${tag} added. Selected tags:`, this.selectedTags);
      }
      this.saveTags(this.selectedTags);
      this.$emit('update-tags', this.selectedTags);
    },
    isSelected(tag) {
      return this.selectedTags.some(t => t.tag_name === tag.tag_name && t.category === tag.category);
    },
    getSavedTags() {
      try {
        const savedTags = Cookies.get('selectedTags');
        if (savedTags) {
          const parsedTags = JSON.parse(savedTags);
          if (Array.isArray(parsedTags)) {
            return parsedTags;
          } else {
            console.error('Saved tags format is invalid:', savedTags);
            return [];
          }
        }
      } catch (error) {
        console.error('Error parsing saved tags from cookies:', error);
      }
      return [];
    },
    saveTags(tags) {
      try {
        Cookies.set('selectedTags', JSON.stringify(tags), { expires: 7 });
        console.log('Selected tags saved to cookies:', tags);
      } catch (error) {
        console.error('Error saving tags to cookies:', error);
      }
    },
    clearAllTags() {
      this.selectedTags = [];
      this.saveTags(this.selectedTags);
      this.$emit('update-tags', this.selectedTags);
    },
  }
};
</script>



<style scoped>
* {
  font-family: 'Helvetica', sans-serif;
}


body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.tags-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 50px;
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
  width: 200px;
  height: 200px;
  background-color: #B5A688;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}
.tag.selected {
  border: 3px solid yellow;
}
.clear-tags-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.clear-tags-button:hover {
  background-color: darkred;
}
</style>