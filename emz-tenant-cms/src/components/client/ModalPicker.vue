<template>
  <div @click="openModal" class="cms-modal-picker">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    root: Object,
    currentModal: Object,
  },
  data() {
    return {
      modals: [],
      current : {},
      main: {}
    }
  },
  created() {
    this.main = this.root
    if(this.currentModal === undefined) {
      this.current = this.main
    } else {
      this.current = this.currentModal
    }
  },
  methods: {
    openModal() {
      if(this.$dataModals.length > 0 && this.main && this.$dataModals.filter(e => e.name === this.main.name).length === 0) {
        this.$dataModals.length = 0
      } else {
        if(this.$dataModals.filter(e => e === this.current).length === 0) {
          this.$dataModals.push(this.current)
        }
      }

      if(this.$dataModals.length === 0 && this.main) {
        this.$dataModals.push(this.main)
      }

      let currentIndex = Object.keys(this.$dataModals)[this.$dataModals.findIndex(x => x.name === this.current.name)]

      const data = {
        isBack: currentIndex > 0
      }

      const options = {
        classes: 'cms-modal absolute',
        clickToClose: currentIndex > 0 ? false : true,
        name: this.current.id
      };
      const style = {
        width: this.current.width ? this.current.width : 720, height: 'auto', shiftX: this.current.shiftX ? this.current.shiftX : 0, adaptive: true,
      };
      const events = {
        closed: () => this.beforeClose(currentIndex),
      };

      // this.$modal.hideAll()
      if(parseInt(currentIndex) > 0) {
        this.$modal.hide(this.$dataModals[currentIndex - 1].id)
      }
      this.$modal.show(this.current.name, { ...data }, { ...options, ...style }, events);
    },
    beforeClose (index) {
      this.$emit('close')

      let modal = {};
      let current = this.$dataModals.find(e => e === this.$dataModals[index])
      let currentIndex = Object.keys(this.$dataModals)[this.$dataModals.findIndex(x => x === current)]

      if(this.$dataModals && this.$dataModals.length > 1 && index) {
        modal = this.$dataModals[currentIndex - 1]
        if(modal) {
          const data = {
            isBack: index > 0
          }

          const options = {
            classes: 'cms-modal absolute',
            clickToClose: currentIndex - 1 > 0 ? false : true,
            name: modal.id
          };
          const style = {
            width: modal.width ? modal.width : 720, height: 'auto', shiftX: modal.shiftX ? modal.shiftX : 0, adaptive: true,
          };
          const events = {
            closed: () => this.beforeClose(Object.keys(this.$dataModals)[this.$dataModals.findIndex(x => x.name === current.name) - 1]),
          };

          this.$modal.show(modal.name, { ...data }, { ...options, ...style }, events)
        }
      }
    }
  },
};
</script>
<style lang="scss">
.cms-modal-picker {
  @apply inline-block;
  //display: inherit #{!important};
}
</style>
