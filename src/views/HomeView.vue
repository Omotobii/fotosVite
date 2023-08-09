<script>
import axios from 'axios'
import More from '../components/moreInfo.vue'

export default {
  components: { More },
  data() {
    return {
      photos: null,
      showMore: false,
      photo: null
    }
  },
  methods: {
    fetchPhotos() {
      axios
        .get(
          'https://api.unsplash.com/photos?client_id={the access key goes here}&per_page=30'
        )
        .then((response) => {
          this.photos = response.data
          console.log(this.photos)
        })
    },
    more: function(id){
      let allPhotos = this.photos
      let photo = allPhotos.filter(photo => photo.id == id)
      this.photo = photo
      this.showMore = !this.showMore
      console.log(this.photo)
    },
  },
  created() {
    this.fetchPhotos()
  }
}
</script>

<template>
  <More :photo="photo" :showMore="showMore" @close="showMore = !showMore" v-if="showMore"></More>
  <div class="platform">
    <div @click="more(photo.id)" @close="showMore = !showMore" class="image-container" v-for="photo in photos" :key="photo.id">
      <img :src="photo.urls.thumb" alt="" />
      <div class="info">
        <h1 class="description">{{ photo.alt_description }}</h1>
        <h4 class="publisher">- {{ photo.user.name }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.platform {
  display: block;
}

div .image-container {
  display: block;
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
}

img {
  width: 100%;
  height: 100;
}

.info {
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  background-image: linear-gradient(transparent, black);
  width: 100%;
  max-height: 100%;
}

.description {
  font-size: 1em;
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
  text-transform: capitalize;
  color: white;
}

.publisher {
  font-style: italic;
}

@media (min-width: 481px) and (max-width: 767px) {
  .platform {
    columns: 2;
    break-inside: avoid;
  }
  div .image-container {
    break-inside: avoid;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .platform {
    columns: 3;
    break-inside: avoid;
  }
  div .image-container {
    break-inside: avoid;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .platform {
    columns: 4;
    break-inside: avoid;
  }
  div .image-container {
    break-inside: avoid;
  }
}

@media (min-width: 1200px) and (max-width: 1919px) {
  .platform {
    columns: 5;
    break-inside: avoid;
  }
  div .image-container {
    break-inside: avoid;
  }
}
</style>
