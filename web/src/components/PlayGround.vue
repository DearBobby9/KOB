<template>
    <div class = "playground"></div>
        <GameMap></GameMap>
</template>

<script>
import GameMap from '@/components/GameMap.vue'

export default {
    components: {
        GameMap
    },
}
</script>

<style scoped>
div.playground {
    width: 60vw;
    height: 48vw;
    margin:40px auto;
}

</style> //from 01:13:10