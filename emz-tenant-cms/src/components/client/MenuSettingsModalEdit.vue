<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Sửa Menu
      </h3>
    </div>

    <div class="w-full" slot="body">

      <FormCreateNewMenu class="no-p no-b no-mb">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Tên menu</label>
        </div>
        <div class="w-full">
          <InputType
              placeholder="Sản phẩm Demo"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
          </InputType>
        </div>
        <hr class="my-5">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">
            Liên kết
            <span class="text-placeholderStyle ml-3">Kéo thả <SixDotsSVG class="w-2 inline -mt-1 mx-1 fill-current stroke-current stroke-1"/> để thay đổi vị trí, hoặc tạo menu đa cấp cho website. <a
                href="#" class="text-buttonAndURL">Hướng dẫn</a></span>
          </label>
        </div>
        <div class="w-full" v-for="(data, index) in optionData" :key="index">
          <div class="w-full">
            <div class="flex flex-column items-center">
              <div class="w-20 text-center text-placeholderStyle">
                <SixDotsSVG class="w-2 inline-flex -mt-1 mx-1 fill-current stroke-current stroke-1"/>
              </div>
              <div class="w-full">
                <Box class="no-p">
                  <div slot="content" class="p-3 w-full">
                    <div class="table w-full">
                      <div class="table-row w-full">
                        <div class="table-cell">
                          <InputType
                              main-class="search-bar"
                              :placeholder="data.label"
                              input-class="cms-input__default"/>
                        </div>
                        <div class="w-auto text-center text-placeholderStyle ml-3">
                          <DeleteSVG class="w-4 inline -mt-1 fill-current"/>
                        </div>
                      </div>
                      <div class="table-row w-full">
                        <div class="table-cell" v-if="data.select">
                          <div class="grid grid-cols-6 gap-3 mt-3">
                            <div class="col-span-6 md:col-span-2" v-for="(select, index) in data.select" :key="index">
                              <SelectOption :option-data="select.list"/>
                            </div>
                            <div class="col-span-6 md:col-span-2" v-if="data.customUrl">
                              <InputType
                                  main-class="search-bar"
                                  placeholder="Nhập link liên kết"
                                  input-class="cms-input__default"/>
                            </div>
                          </div>
                        </div>
                        <div class="w-auto text-center text-placeholderStyle ml-3">
                          <CloseSVG class="w-4 inline -mt-1 fill-current"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </div>
          <div v-for="(sub, index) in data.sub" :key="index" class="w-full pl-10">
            <div class="flex flex-column items-center">
              <div class="w-20 text-center text-placeholderStyle">
                <SixDotsSVG class="w-2 inline-flex -mt-1 mx-1 fill-current stroke-current stroke-1"/>
              </div>
              <div class="w-full">
                <Box class="no-p"
                     :class="[
                         index !== 0 ? 'mt-5' : null,
                         index+1 === data.sub.length-1 ? 'no-mb' : null
                     ]">
                  <div slot="content" class="p-3 w-full">
                    <div class="table w-full">
                      <div class="table-row w-full">
                        <div class="table-cell">
                          <InputType
                              main-class="search-bar"
                              :placeholder="sub.label"
                              input-class="cms-input__default"/>
                        </div>
                        <div class="w-auto text-center text-placeholderStyle ml-3">
                          <DeleteSVG class="w-4 inline -mt-1 fill-current"/>
                        </div>
                      </div>
                      <div class="table-row w-full">
                        <div class="table-cell" v-if="sub.select">
                          <div class="grid grid-cols-6 gap-3 mt-3">
                            <div class="col-span-6 md:col-span-2" v-for="(select, index) in sub.select" :key="index">
                              <SelectOption :option-data="select.list"/>
                            </div>
                            <div class="col-span-6 md:col-span-2" v-if="data.customUrl">
                              <InputType
                                  main-class="search-bar"
                                  placeholder="Nhập link liên kết"
                                  input-class="cms-input__default"/>
                            </div>
                          </div>
                        </div>
                        <div class="w-auto text-center text-placeholderStyle ml-3">
                          <CloseSVG class="w-4 inline -mt-1 fill-current"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
            <div class="w-full pl-20 mb-5" v-if="index+1 === data.sub.length">
              <a href="#" class="text-standardCMS text-buttonAndURL">
                <PlusSVG class="w-3 inline -mt-1 mr-2 fill-current"/> Thêm liên kết
              </a>
            </div>
          </div>
        </div>
        <a href="#" class="text-standardCMS text-buttonAndURL">
          <PlusSVG class="w-3 inline -mt-1 mr-2 fill-current"/> Thêm liên kết
        </a>
      </FormCreateNewMenu>

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
import Button from '@/components/client/Button.vue';
import FormCreateNewMenu from "@/components/client/FormCreateNewMenu";
import InputType from "@/components/client/InputType";
import Box from "@/components/client/Box";
import SelectOption from "@/components/client/SelectOption";

import {
  SixDotsSVG,
  DeleteSVG,
  PlusSVG,
  CloseSVG
} from '@/components/SVGs';

export default {
  components: {
    FormCreateNewMenu,
    Modal,
    Button,
    InputType,
    SixDotsSVG,
    DeleteSVG,
    PlusSVG,
    CloseSVG,
    Box,
    SelectOption
  },
  data() {
    return {
      optionData: [
        {
          label: 'Tên menu',
          select: [
            {
              list: [
                { name: 'Trang chủ' },
                { name: 'Danh mục sản phẩm' },
                { name: 'Sản phẩm' },
                { name: 'Tất cả sản phẩm' },
                { name: 'Trang nội dung' },
                { name: 'Danh mục tin' },
                { name: 'Trang tìm kiếm' },
                { name: 'Địa chỉ web' },
              ],
            },
          ]
        },
        {
          label: 'Giới thiệu',
          select: [
            {
              list: [
                { name: 'Trang chủ' },
                { name: 'Danh mục sản phẩm' },
                { name: 'Sản phẩm' },
                { name: 'Tất cả sản phẩm' },
                { name: 'Trang nội dung' },
                { name: 'Danh mục tin' },
                { name: 'Trang tìm kiếm' },
                { name: 'Địa chỉ web' },
              ],
            },
            {
              list: [
                { name: 'Trang chủ' },
                { name: 'Danh mục sản phẩm' },
                { name: 'Sản phẩm' },
                { name: 'Tất cả sản phẩm' },
                { name: 'Trang nội dung' },
                { name: 'Danh mục tin' },
                { name: 'Trang tìm kiếm' },
                { name: 'Địa chỉ web' },
              ],
            },
          ]
        },
        {
          label: 'Sản phẩm',
          select: [
            {
              list: [
                { name: 'Trang chủ' },
                { name: 'Danh mục sản phẩm' },
                { name: 'Sản phẩm' },
                { name: 'Tất cả sản phẩm' },
                { name: 'Trang nội dung' },
                { name: 'Danh mục tin' },
                { name: 'Trang tìm kiếm' },
                { name: 'Địa chỉ web' },
              ],
            },
            {
              list: [
                { name: 'Trang chủ' },
                { name: 'Danh mục sản phẩm' },
                { name: 'Sản phẩm' },
                { name: 'Tất cả sản phẩm' },
                { name: 'Trang nội dung' },
                { name: 'Danh mục tin' },
                { name: 'Trang tìm kiếm' },
                { name: 'Địa chỉ web' },
              ],
            },
          ],
          sub: [
            {
              label: 'Giới thiệu',
              sub: true,
              select: [
                {
                  list: [
                    { name: 'Trang chủ' },
                    { name: 'Danh mục sản phẩm' },
                    { name: 'Sản phẩm' },
                    { name: 'Tất cả sản phẩm' },
                    { name: 'Trang nội dung' },
                    { name: 'Danh mục tin' },
                    { name: 'Trang tìm kiếm' },
                    { name: 'Địa chỉ web' },
                  ],
                },
                {
                  list: [
                    { name: 'Trang chủ' },
                    { name: 'Danh mục sản phẩm' },
                    { name: 'Sản phẩm' },
                    { name: 'Tất cả sản phẩm' },
                    { name: 'Trang nội dung' },
                    { name: 'Danh mục tin' },
                    { name: 'Trang tìm kiếm' },
                    { name: 'Địa chỉ web' },
                  ],
                },
              ]
            },
            {
              label: 'Sản phẩm hay',
              sub: true,
              select: [
                {
                  list: [
                    { name: 'Trang chủ' },
                    { name: 'Danh mục sản phẩm' },
                    { name: 'Sản phẩm' },
                    { name: 'Tất cả sản phẩm' },
                    { name: 'Trang nội dung' },
                    { name: 'Danh mục tin' },
                    { name: 'Trang tìm kiếm' },
                    { name: 'Địa chỉ web' },
                  ],
                },
                {
                  list: [
                    { name: 'Trang chủ' },
                    { name: 'Danh mục sản phẩm' },
                    { name: 'Sản phẩm' },
                    { name: 'Tất cả sản phẩm' },
                    { name: 'Trang nội dung' },
                    { name: 'Danh mục tin' },
                    { name: 'Trang tìm kiếm' },
                    { name: 'Địa chỉ web' },
                  ],
                },
              ]
            }
          ]
        },
        {
          label: 'Khách hàng',
          select: [
            {
              list: [
                { name: 'Link - Địa chỉ web' },
              ],
            },
          ],
          customUrl: true
        },
        {
          label: 'Tìm kiếm',
          select: [
            {
              list: [
                { name: 'Trang tìm kiếm' },
              ],
            },
          ],
        },
      ]
    };
  },
};
</script>

<style lang="scss"></style>
