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
      current : {},
      main: {},
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
      }

      if(this.$dataModals.length === 0 && this.main) {
        this.$dataModals.push(this.main)
      }

      if(this.$dataModals.filter(e => e === this.current).length === 0) {
        this.$dataModals.push(this.current)
      }

      let currentIndex = Object.keys(this.$dataModals)[this.$dataModals.findIndex(x => x === this.current)]

      const data = {
        isBack: parseInt(currentIndex) !== 0,
        onBack: () => {
          console.log('onBack clicked')
          this.closed(currentIndex-1)
        }
      }

      const options = {
        classes: 'cms-modal absolute',
        clickToClose: parseInt(currentIndex) === 0,
        name: this.current.id
      };
      const style = {
        width: this.current.width ? this.current.width : 720, height: 'auto', shiftX: this.current.shiftX ? this.current.shiftX : 0, adaptive: true,
      };
      const events = {
        'before-open': () => {
          console.log('==================================================================================================')
          console.log('event: before-open')
          if(parseInt(currentIndex) > 0) {
            this.$modal.hide(this.$dataModals[currentIndex-1].id)
          }
        },
        opened: () => {
          console.log('event: opened')
        },
        'before-close': () => {
          console.log('event: before-close -> current data')
        },
        closed: () => {
          console.log('event: closed')
          // this.$emit('close')
        },
      };
      this.$modal.show(this.current.name, { ...data }, { ...options, ...style }, events);
    },
    closed(index) {
      if(this.$dataModals[index]) {
        const data = {
          isBack: index !== 0,
          onBack: () => {
            this.closed(index-1)
          }
        }
        const options = {
          classes: 'cms-modal absolute',
          clickToClose: index === 0,
          name: this.$dataModals[index].id
        };
        const style = {
          width: this.$dataModals[index].width ? this.$dataModals[index].width : 720, height: 'auto', shiftX: this.$dataModals[index].shiftX ? this.$dataModals[index].shiftX : 0, adaptive: true,
        };

        const events = {
          'before-open': () => {
            console.log('==================================================================================================')
            console.log('event: before-open')
            console.log(this.$dataModals)
          },
          opened: () => {
            console.log('event: opened')
            this.$modal.hide(this.$dataModals[index+1].id)
            this.$dataModals.pop()
          },
          'before-close': () => {
            console.log('event: before-close -> current data')
            if(this.$dataModals.length === 1) {
              this.$dataModals.length = 0
            }
          },
          closed: () => {
            console.log('event: closed')
            this.$emit('close')
          },
        };

        this.$modal.show(this.$dataModals[index].name, { ...data }, { ...options, ...style }, events);
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
