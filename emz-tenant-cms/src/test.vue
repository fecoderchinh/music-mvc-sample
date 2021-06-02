<template>
    <div>
        <ValidationObserver v-slot="{  }" ref="observer">
        <vue-nestable v-model="nestableItems">
            <vue-nestable-handle
                    slot-scope="{ item }"
                    :item="item">
                {{ item.text }}
                 <ValidationProvider rules="required" v-slot="{ errors }" slim>
                    Name: <input type="text" v-model="item.text">
                     <span>{{ errors[0] }}</span>
                 </ValidationProvider>
            </vue-nestable-handle>
        </vue-nestable>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        <button type="button" @click="submit">Submit</button>
        </ValidationObserver>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                nestableItems: [
                    {
                        id: 0,
                        text: 'Andy'
                    }, {
                        id: 1,
                        text: 'Harry',
                        children: [{
                            id: 2,
                            text: 'David'
                        }]
                    }, {
                        id: 3,
                        text: 'Lisa'
                    }
                ]
            }
        },
        methods: {
            async submit () {
                const isValid = await this.$refs.observer.validate();
                console.log('valid', isValid);
                if (!isValid) {
                    // ABORT!!
                    // alert('error');
                } else {
                    alert('success');
                }

                // 🐿 ship it
            }
        }
    }
</script>
<style>
    /*
* Style for nestable
*/
    .nestable {
        position: relative;
    }
    .nestable-rtl {
        direction: rtl;
    }
    .nestable .nestable-list {
        margin: 0;
        padding: 0 0 0 40px;
        list-style-type: none;
    }
    .nestable-rtl .nestable-list {
        padding: 0 40px 0 0;
    }
    .nestable > .nestable-list {
        padding: 0;
    }
    .nestable-item,
    .nestable-item-copy {
        margin: 10px 0 0;
    }
    .nestable-item:first-child,
    .nestable-item-copy:first-child {
        margin-top: 0;
    }
    .nestable-item .nestable-list,
    .nestable-item-copy .nestable-list {
        margin-top: 10px;
    }
    .nestable-item {
        position: relative;
    }
    .nestable-item.is-dragging .nestable-list {
        pointer-events: none;
    }
    .nestable-item.is-dragging * {
        opacity: 0;
        filter: alpha(opacity=0);
    }
    .nestable-item.is-dragging:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(106, 127, 233, 0.274);
        border: 1px dashed rgb(73, 100, 241);
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }
    .nestable-drag-layer {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        pointer-events: none;
    }
    .nestable-rtl .nestable-drag-layer {
        left: auto;
        right: 0;
    }
    .nestable-drag-layer > .nestable-list {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        background-color: rgba(106, 127, 233, 0.274);
    }
    .nestable-rtl .nestable-drag-layer > .nestable-list {
        padding: 0;
    }
    .nestable [draggable="true"] {
        cursor: move;
    }
    .nestable-handle {
        display: inline;
    }
</style>
