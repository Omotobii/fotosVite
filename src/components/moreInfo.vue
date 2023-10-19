<script>
export default {
    props: ['photo', 'showMore'],
    methods: {
        closePhoto() {
            this.$emit('close', 'The modal has been closed')
        }
    }
}
</script>

<template>
    <div class="container" @click.self="closePhoto">
        <div class="photo-box" v-for="photo in photo" :key="photo.id">
            <img :src="photo.urls.full" :alt="photo.alt_description">

            <div class="photo-info">
                <h1>{{ photo.alt_description }}</h1>
                <p>- {{ photo.user.name }}</p>
            </div>
        </div>
    </div>

</template>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100vh;
    width: 100vw;
    z-index: 2;
}
.photo-box {
    display: block;
    margin: 2rem auto;
    background-color: white;
    border-radius: 0.4rem;
    width: 100%;
    max-height: 90vh;
    color: black;
    font-weight: 400;
    text-transform: capitalize;
}

.photo-info {
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.25em;
    font-weight: 500;
}

p {
    font-size: 1em;
    font-style: italic;
    text-align: end;
}

img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
}

@media (min-width: 768px) /*and (max-width: 1919)*/ {
    .photo-box {
        display: flex;
        justify-content: space-between;
        width: 70%;;
        max-height: 80vh;
    }

    img {
        width: auto;
        max-width: 60%;
        max-height: 80vh;
    }
    
    .photo-info {
        justify-content: center;
    }

}

</style>