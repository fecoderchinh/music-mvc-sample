<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" :showFooter="false">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline transform rotate-180"/>
            Chọn menu
          </template>
        </Button>

      </h3>
    </div>

    <div class="grid gap-5" slot="body">

      <Collapse header="Danh mục chính">
        <ul>
          <li
              v-for="(data, index) in list1" :key="index"
              class="flex pt-5"
              :class="[ index+1 === list1.length ? 'pb-5' : null ]">
            <a href="javascript:void(0)" class="flex-1 cms-typo text-14px text-menuItem">
              {{ data.name }}
            </a>
            <a href="javascript:void(0)" class="flex-1 text-right cms-typo text-14px text-buttonAndURL">
              Thêm vào
            </a>
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
import Button from '@/components/client/Button.vue';

import {
  LongArrowSVG,
} from '@/components/SVGs.vue';
import Collapse from "@/components/client/Collapse";

export default {
  components: {
    Collapse,
    Modal,
    Button,
    LongArrowSVG,
  },
  data() {
    return {
      list1: [
        {
          name: 'Trang chủ'
        },
        {
          name: 'Sản phẩm'
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
          name: 'Giới thiệu'
        },
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
      ]
    };
  },
};
</script>

<style lang="scss"></style>
