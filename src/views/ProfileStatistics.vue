<template>
  <div class="profile-page">

  </div>
</template>

<template>
  <div>
    <div v-if="isLoading" class="article-preview">Se incarca...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">
        Nu ai adaugat nicun eveniment. Adauga un eveniment pentru a genera statistici personalizate.
      </div>
      <div v-else class="container-fluid">
        <h2 style="padding: 30px 0;">Statistici generale</h2>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <pie-chart :data="[['Evenimente abonati', this.articles.filter(a => a.author.following).length], ['Evenimente neabonati', this.articles.filter(a => !a.author.following).length]]"></pie-chart>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <pie-chart :data="[['Evenimente acesta saptamana', 2], ['Evenimente trecute', 10]]"></pie-chart>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <pie-chart :data="[['tag1', 8], ['tag2', 12], ['tag3', 12], ['tag4', 2], ['tag5', 19]]"></pie-chart>
          </div>
        </div>
        <h2 style="padding: 30px 0;">Statistici personale</h2>
        <div class="row">
          <column-chart :data="[['Evenimente create', 2], ['Evenimente la care particip', 6], ['Evenimente la care nu particip', 3]]"></column-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLES } from "../store/actions.type";

export default {
  name: "ProfileStatistics",
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    author: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    favorited: {
      type: String,
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      if (this.author) {
        filters.author = this.author;
      }
      if (this.tag) {
        filters.tag = this.tag;
      }
      if (this.favorited) {
        filters.favorited = this.favorited;
      }
      return {
        type,
        filters
      };
    },
    pages() {
      if (this.isLoading || this.articlesCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.articlesCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters(["articlesCount", "isLoading", "articles"])
  },
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.fetchArticles();
    },
    type() {
      this.resetPagination();
      this.fetchArticles();
    },
    author() {
      this.resetPagination();
      this.fetchArticles();
    },
    tag() {
      this.resetPagination();
      this.fetchArticles();
    },
    favorited() {
      this.resetPagination();
      this.fetchArticles();
    }
  },
  mounted() {
    this.fetchArticles();
    setTimeout(() => {
        console.log(this.articles)
      }, 1000);
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig);

    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    }
  }
};
</script>
