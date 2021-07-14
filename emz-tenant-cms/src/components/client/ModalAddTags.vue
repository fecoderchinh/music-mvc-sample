<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :isBack="isBack" @back="onBack">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm tag cho 6 sản phẩm
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modalAddTags1" class="select-none cursor-pointer">Tags</label>
          </div>
          <div class="w-full border px-2 min-h-10 flex items-center rounded">
            <TagInput v-model="tags" placeholder="Nhập tags"></TagInput>
          </div>
          <div class="w-full mt-3">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modalAddTags2" class="select-none cursor-pointer">Bạn có thể chọn những tag đã được sử dụng</label>
            </div>
          </div>
          <div class="w-full mt-3">
            <InlineTags :option-data="this.optionDataTags" class="no-pt" subClass="inline-flex mr-5 mt-2"/>
          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white" @click="onBack">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-blue">
          <template slot="name">
            Lưu
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import Button from '@/components/client/Button.vue';
import TagInput from "@/components/client/TagInput";
import InlineTags from "@/components/client/InlineTags";

export default {
  components: {
    InlineTags,
    TagInput,
    Modal,
    Button,
  },
  props: {
    isBack: Boolean,
    onBack: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      tags: [],
      optionDataTags: [],
    };
  },
};
</script>

<style lang="scss"></style>
