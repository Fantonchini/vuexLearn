<template>
    <div class="select">
        <h1>Vue select</h1>
        <v-select
                :searchable="false"
                class="style-chooser"
                :options="options"
                placeholder="Select an options"
                @input="runme"
                v-model="selected[0]"
        />
        <v-select
                :searchable="false"
                class="style-chooser"
                :options="options"
                placeholder="Select an options"
                @input="runme"
                v-model="selected[1]"
        />
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    components: { vSelect },
    data() {
        return {
            selected: new Array(2),
            options: [
                {
                    id: 1,
                    value: 'dsfjgshdbg',
                    label: 'ул в электронный дизайн.',
                },
                {
                    id: 2,
                    value: 'test2',
                    label: 'bar',
                },
                {
                    id: 3,
                    value: 'test3',
                    label: 'baz',
                },
            ]
        }
    },
    methods: {
        runme() {
            console.log(this.selected)
        }
    },
    computed: {

    }
}
</script>

<style scoped>

h1 {
    font-size: 26px;
    font-weight: 600;
    color: green;
}
</style>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
<style lang="sass">
.select
    width: 250px
.style-chooser
    width: 100%
    margin: 0 auto
    .vs__dropdown-option
        border-top: 1px solid #F3F3F3
        color: #B19B69
        font-weight: bold
        padding: 5px 0
        overflow: hidden
        white-space: unset

    .vs__dropdown-option--highlight
        background: none
        color: black

    .vs__search
        line-height: 20px
        margin: 0
        padding: 0
        border: none


        &::placeholder
            font-size: 14px
            line-height: 20px
            color: #B19B69
            border: none
            font-weight: bold
    .vs__dropdown-toggle
        padding: 10px 0 10px 20px
        background: white
        border: none
        box-shadow: 5px 10px 20px rgba(177, 155, 105, 0.2)
        border-radius: 20px
        border-bottom: none
        font-size: 14px
        line-height: 20px
        font-weight: bold
        .vs__selected
            color: black
            font-weight: bold
            margin: 0
            padding: 0
            border: none
            line-height: 20px
            height: 1.41em
            overflow: hidden
            text-align: left
            display: block
            text-overflow: clip
            &-options
                padding: 0
                overflow: hidden
                max-height: 1.43em
                &::after
                    content: ''
                    display: block
                    height: 20px
                    position: absolute
                    top: 0
                    width: 100%
                    pointer-events: none
                    background-image: linear-gradient(to left, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 30%)

        .vs__actions
            padding: 0 20px 0 0

    .vs__dropdown-menu
        padding: 0 20px
        border-radius: 0 0 20px 20px
        box-shadow: 5px 15px 20px rgba(177, 155, 105, 0.2)
        border: none
        border-top: none
        .vs__dropdown-option

    .vs__open-indicator
        fill: #B19B69
        transition: none

    .vs__fade-enter-active,
    .vs__fade-leave-active
        transition: none
.vs--open
    .vs__dropdown-toggle
        border-radius: 20px 20px 0 0
    .vs__search::placeholder
        color: black

.vs--unsearchable
    .vs__search


</style>