<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Nhập tag cho đơn hàng
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Nhập tag</label>
          </div>
          <div class="w-full border px-2 min-h-10 flex items-center rounded">
            <TagInput v-model="tags"></TagInput>
          </div>
        </div>

        <div class="col-span-6">
          <div class="grid grid-col-span-6 gap-x-5">
            <div class="col-span-3 sm:col-span-6">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label class="select-none cursor-pointer">Hoặc click chọn tags ở dưới</label>
              </div>
            </div>

            <div class="col-span-3 sm:col-span-6">
              <div class="grid grid-cols-2 gap-x-5">
                <div class="col-span-1">
                  <div class="cms-label text-14px mb-3 text-menuItem">
                    <h3 class="select-none">Mới nhất</h3>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="cms-label text-14px mb-3 text-menuItem">
                    <h3 class="select-none">Dùng nhiều</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-6">
              <InlineTags :option-data="this.optionDataTags2" class="no-pt" subClass="inline-flex mr-5 mt-2"/>
            </div>
          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
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
import TagInput from '@/components/client/TagInput.vue';
import InlineTags from '@/components/client/InlineTags.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    TagInput,
    InlineTags,
    Button,
  },
  data() {
    return {
      tags: ['Sale', '30/4', 'TriAn', 'Event', 'flash'],
      optionDataTags2: [
        {
          name: 'Sale',
          closeTag: false,
        },
        {
          name: '30/4',
          closeTag: false,
        },
        {
          name: 'TriAn',
          closeTag: false,
        },
        {
          name: 'Event',
          closeTag: false,
        },
        {
          name: 'flash',
          closeTag: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
