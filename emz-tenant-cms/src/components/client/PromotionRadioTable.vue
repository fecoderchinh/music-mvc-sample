<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-promo-filter">
      <table class="w-full">
        <tbody>

          <tr v-for="(data, index) in optionDataTable" :key="index" class="no-px">
            <td class="col">
              <div class="inner-col text-menuIcon">
                <template v-if="( data.img )">
                  <img :src="data.img" alt="">
                </template>
                <template v-else>
                  <NoImgSVG class="w-60px h-60px"/>
                </template>
              </div>
            </td>
            <td class="col">
              <div class="inner-col text-buttonAndURL">
                {{ ( data.source ) ? data.source : '' }}
                <ul class="cms-table-props list-none space-x-1 w-full truncate flex items-center">
                  <li class="inline-flex items-center" v-for="(prop, propIndex) in data.list" :key="propIndex">
                    <span class="font-lato font-medium text-13px" :class="'text-'+prop.typeColor">{{ prop.typeName }}</span>
                    <EllipseSVG class="w-1 h-1 ml-1 fill-menuIcon" v-if="propIndex + 1 !== data.list.length"/>
                  </li>
                </ul>
              </div>
              <CloseSVG class="w-4 fill-menuIcon absolute top-50 right-0 transform -translate-y-1/2 mr-5 cursor-pointer"/>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  CloseSVG,
  NoImgSVG,
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    CloseSVG,
    NoImgSVG,
    EllipseSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          source: 'Tóc đẹp',
          list: [
            {
              typeName: 'Ngắn',
              typeColor: 'cmsRed',
            },
            {
              typeName: 'Xanh',
              typeColor: 'cmsGreen',
            },
            {
              typeName: 'Uốn',
              typeColor: 'cmsOrange',
            },
          ],
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo tóc',
        },
        {
          list: [
            {
              typeName: 'Ngắn',
              typeColor: 'cmsRed',
            },
            {
              typeName: 'Xanh',
              typeColor: 'cmsGreen',
            },
            {
              typeName: 'Uốn',
              typeColor: 'cmsOrange',
            },
          ],
        },
        {
          source: 'Tóc đẹp',
          list: [
            {
              typeName: 'Ngắn',
              typeColor: 'cmsRed',
            },
            {
              typeName: 'Xanh',
              typeColor: 'cmsGreen',
            },
            {
              typeName: 'Uốn',
              typeColor: 'cmsOrange',
            },
          ],
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo tóc',
        },
        {
          list: [
            {
              typeName: 'Ngắn',
              typeColor: 'cmsRed',
            },
            {
              typeName: 'Xanh',
              typeColor: 'cmsGreen',
            },
            {
              typeName: 'Uốn',
              typeColor: 'cmsOrange',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .tab-responsive {
    @media (max-width: 1024px) {
      overflow-x: scroll;
    }
    > .cms-table-promo-filter {
      @media (max-width: 1024px) {
        width: 150vw;
      }
      @media (max-width: 425px) {
        width: 300vw;
      }
    }
  }
  .cms-table-promo-filter {
    @apply w-full flex items-center;
    table {
      @apply w-full;
    }
    thead {
      @apply flex;
      tr {
        @apply flex px-3 w-full mb-5;
        th {
          @apply flex-auto truncate px-3 text-left text-labelAndTitle;
          &:nth-child(1) {
            width: 10%;
          }
          &:nth-child(2) {
            width: 90%;
          }
        }
      }
    }
    tbody {
      @apply flex flex-col;
      tr {
        @apply flex px-3 w-full;
        td {
          @apply flex-auto px-3 py-3 border-t border-b text-left text-menuItem;
          @screen sm {
            @apply truncate;
          }
          &:nth-child(1) {
            width: 10%;
          }
          &:nth-child(2) {
            width: 90%;
          }
        }
        &:hover {
          @apply bg-gray-200;
        }
      }
    }
    [class^=col-], .col {
      @apply relative font-lato font-medium text-13px;
      @media (min-width: 768px) {
        @apply flex items-center;
      }
      .inner-col {
        @apply font-lato font-medium text-13px;
        @screen sm {
          @apply absolute w-11/12 truncate;
        }
      }
    }
  }
</style>
