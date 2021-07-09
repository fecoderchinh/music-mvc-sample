<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :showFooter="false" :isBack="isBack" @back="onBack">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Chọn menu
      </h3>
    </div>

    <div class="grid gap-5" slot="body">

      <Collapse header="TEST MODAL">
        <ModalPicker
            class="inline-flex ml-auto"
            :current-modal="treeModal2[0]"
        >
          <a href="javascript:void(0)" class="font-lato font-medium text-14px text-buttonAndURL xl:text-right block">add tags</a>
        </ModalPicker>
      </Collapse>

      <Collapse header="Footer">
        <ul v-for="(data, index) in list2" :key="index" :class="[index+1 === list2.length ? 'pb-5' : null]">
          <MenuNested v-if="data.children" :nested="data.children"/>
          <li
              v-else
              class="flex flex-col pt-5">
            <div class="flex">
              <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
                {{ data.name }}
              </a>
              <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
                Thêm vào
              </a>
            </div>
          </li>
        </ul>
      </Collapse>

      <Collapse header="Danh mục chính">
        <ul>
          <li
              v-for="(data, index) in list1" :key="index"
              class="flex flex-col pt-5"
              :class="[ index+1 === list1.length ? 'pb-5' : null ]">
              <div class="flex">
                <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
                  {{ data.name }}
                </a>
                <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
                  Thêm vào
                </a>
              </div>
            <ul class="pl-5 flex flex-col" v-if="data.level2">
              <li
                  v-for="(data2, index2) in data.level2" :key="index2"
                  class="flex flex-col pt-5"
                  :class="[ index2+1 === data.level2.length ? 'pb-5' : null ]">
                <div class="flex">
                  <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
                    {{ data2.name }}
                  </a>
                  <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
                    Thêm vào
                  </a>
                </div>
                <ul class="pl-5 flex flex-col" v-if="data2.level3">
                  <li
                      v-for="(data3, index3) in data2.level3" :key="index3"
                      class="flex flex-col pt-5"
                      :class="[ index3+1 === data2.level3.length ? 'pb-5' : null ]">
                    <div class="flex">
                      <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
                        {{ data3.name }}
                      </a>
                      <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
                        Thêm vào
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Collapse>

      <Collapse header="Footer">
        <ul>
          <li
              v-for="(data, index) in list2" :key="index"
              class="flex pt-5"
              :class="[ index+1 === list2.length ? 'pb-5' : null ]">
            <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
              {{ data.name }}
            </a>
            <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
              Thêm vào
            </a>
          </li>
        </ul>
      </Collapse>

      <Collapse header="Thông tin">
        <ul>
          <li
              v-for="(data, index) in list3" :key="index"
              class="flex pt-5"
              :class="[ index+1 === list3.length ? 'pb-5' : null ]">
            <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
              {{ data.name }}
            </a>
            <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
              Thêm vào
            </a>
          </li>
        </ul>
      </Collapse>

      <Collapse header="Hỗ trợ">
        <ul>
          <li
              v-for="(data, index) in list4" :key="index"
              class="flex pt-5"
              :class="[ index+1 === list4.length ? 'pb-5' : null ]">
            <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
              {{ data.name }}
            </a>
            <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
              Thêm vào
            </a>
          </li>
        </ul>
      </Collapse>

      <Collapse header="Hướng dẫn">
        <ul>
          <li
              v-for="(data, index) in list5" :key="index"
              class="flex pt-5"
              :class="[ index+1 === list5.length ? 'pb-5' : null ]">
            <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
              {{ data.name }}
            </a>
            <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
              Thêm vào
            </a>
          </li>
        </ul>
      </Collapse>

      <Collapse header="Chính sách">
        <ul>
          <li
              v-for="(data, index) in list6" :key="index"
              class="flex pt-5"
              :class="[ index+1 === list6.length ? 'pb-5' : null ]">
            <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
              {{ data.name }}
            </a>
            <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
              Thêm vào
            </a>
          </li>
        </ul>
      </Collapse>

    </div>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';

import Collapse from "@/components/client/Collapse";

import MenuNested from "@/components/client/MenuNested";
import ModalPicker from "@/components/client/ModalPicker";
import ModalAddTags from "@/components/client/ModalAddTags";

export default {
  components: {
    ModalPicker,
    Collapse,
    Modal,
    MenuNested
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
      list1: [
        {
          name: 'Trang chủ'
        },
        {
          name: 'Sản phẩm',
        },
        {
          name: 'Tin tức'
        },
        {
          name: 'Giới thiệu'
        },
        {
          name: 'Liên hệ'
        }
      ],
      list2: [
        {
          name: 'Tìm kiếm'
        },
        {
          name: 'Giới thiệu',
          children : {
            name: 'Trang chủ',
            leaf: false,
            expanded: false,
            children: [{
              name: 'Sản phẩm',
              leaf: false,
              expanded: false,
              children: [
                {
                  name: 'Tin tức',
                },
                {
                  name: 'Giới thiệu',
                  leaf: true,
                },
                {
                  name: 'Tin tức',
                  leaf: false,
                  expanded: false,
                  children: []
                },
                {
                  name: 'Giới thiệu',
                  leaf: true
                },
                {
                  name: 'Liên hệ',
                  leaf: true
                }
              ]
            }]
          },
        },
        {
          name: 'Tin tức'
        },
        {
          name: 'Giới thiệu'
        },
        {
          name: 'Liên hệ'
        }
      ],
      list3: [
        {
          name: 'Trang chủ'
        },
        {
          name: 'Giới thiệu'
        },
        {
          name: 'Sản phẩm'
        },
      ],
      list4: [
        {
          name: 'Tìm kiếm'
        },
        {
          name: 'Đăng nhập'
        },
        {
          name: 'Đăng ký'
        },
        {
          name: 'Giỏ hàng'
        },
      ],
      list5: [
        {
          name: 'Hướng dẫn mua hàng'
        },
        {
          name: 'Hướng dẫn thanh toán'
        },
        {
          name: 'Hướng dẫn giao nhận'
        },
        {
          name: 'Điều khoản dịch vụ'
        },
      ],
      list6: [
        {
          name: 'Chính sách bảo mật'
        },
        {
          name: 'Chính sách vận chuyển'
        },
        {
          name: 'Chính sách đổi trả'
        },
        {
          name: 'Quy định sử dụng'
        }
      ],
      treeModal1: [
        {
          id: 'id',
          name: 'object',
          width: 720,
          shiftX: 0
        },
      ],
      treeModal2: [
        {
          id: 'modalMenuPickerCollapse-1',
          name: ModalAddTags,
          width: 720,
          shiftX: 0
        }
      ]
    };
  },
};
</script>

<style lang="scss"></style>
