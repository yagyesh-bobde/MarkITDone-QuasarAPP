<template>
    <q-banner 
    :class='bgColor'
    inline-actions 
    class="text-center text-white">
    <span class="text-subtitle1"><slot></slot></span>
    </q-banner>
</template>

<script>
export default {
    props: ['bgColor']
}
</script>

<style>

</style>