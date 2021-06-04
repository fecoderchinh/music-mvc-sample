<template>
<main class="bg-gray-100 min-h-screen min-w-screen pb-30px">
	<div class="container px-5">
		<header class="pt-35px">
			<div class="flex flex-col items-center justify-center">
				<NuxtLink to="/">Logo</NuxtLink>
			</div>
			<div class="flex flex-col">
				<p class="cms-typo text-labelAndTitle text-2xl mt-30px text-center">Tạo website không giới hạn . Khẳng định thương hiệu . Kinh doanh hiệu quả.</p>
				<div class="w-24 h-px border border-cmsLightGreen mx-auto mt-5"></div>
			</div>
		</header>
	</div>
	<div class="container px-5">
		<div class="w-full relative mt-6">
			<div class="flex">
				<div class="w-20 min-w-20 max-w-20 mr-5 inline-flex items-center">
					<svg viewBox="0 0 214.78 214.78" class="w-20 h-20 fill-cmsLightBlue hover:fill-cmsLightBlue hover:filter-none" style="shape-rendering: geometricprecision; text-rendering: geometricprecision; fill-rule: evenodd; clip-rule: evenodd;">
						<path d="M107.39 0l0 0c59.3,0 107.39,48.09 107.39,107.39l0 0c0,59.3 -48.09,107.39 -107.39,107.39l0 0c-59.29,-0 -107.38,-48.09 -107.38,-107.39l-0 0c0,-59.3 48.09,-107.39 107.39,-107.39l0 -0zm56.38 147.23l0 5.26c0,6.2 -5.07,11.28 -11.28,11.28l-90.21 0c-6.2,0 -11.28,-5.07 -11.28,-11.28l0 -5.26c0,-13.72 15.97,-21.99 31.01,-28.57 0.56,-0.19 0.94,-0.38 1.5,-0.75 1.13,-0.56 2.44,-0.56 3.57,0.19 6.01,3.95 12.97,6.2 20.3,6.2 7.33,0 14.28,-2.25 20.3,-6.01 1.13,-0.75 2.44,-0.75 3.57,-0.19 0.56,0.19 0.94,0.38 1.5,0.75 15.03,6.39 31.01,14.66 31.01,28.38zm-56.38 -96.22c15.46,0 28,13.88 28,31.01 0,17.13 -12.54,31.01 -28,31.01 -15.46,0 -28,-13.88 -28,-31.01 0,-17.13 12.54,-31.01 28,-31.01z" class="fil0"></path>
					</svg>
				</div>
				<div class="inline-flex items-center flex-1 overflow-hidden">
					<div class="w-full">
						<h3 class="cms-typo text-7 text-labelAndTitle max-w-full truncate"><a href="#">{{ this.$auth.user.fullName }}</a></h3>
						<h3 class="cms-typo text-18px text-buttonAndURL max-w-full truncate"><a href="#">Hồ sơ của tôi</a></h3>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-6 gap-x-45px gap-y-10 mt-10">

				<div v-for="item in shops" class="lg:col-span-2 md:col-span-3 sm:col-span-6">
					<div class="w-full site-item">
						<div v-for="domain in item.domains">
							<h3 v-if="domain.isInternal" 
								class="cms-typo text-2xl text-labelAndTitle">
								<a :href="'http://'+domain.domainName" target="blank">
								{{ domain.domainName }}
								</a>
							</h3>
						
							<ul class="list-none mt-4">
								<li class="inline-flex items-center mr-8">
									<svg viewBox="0 0 22 16" class="w-5 mr-2 fill-menuIcon -mt-px">
										<path id="path-1" d="M11,0.5C6,0.5,1.7,3.6,0,8c1.7,4.4,6,7.5,11,7.5s9.3-3.1,11-7.5C20.3,3.6,16,0.5,11,0.5L11,0.5z M11,13c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S13.8,13,11,13L11,13z M11,5C9.3,5,8,6.3,8,8s1.3,3,3,3s3-1.3,3-3S12.7,5,11,5L11,5z" class="st1"></path>
									</svg><a :href="'http://'+domain.domainName" target="blank" 
									class="cms-typo text-base text-cmsLightGreen">Xem Website</a>
								</li>
								<!--<li class="inline-flex items-center mr-8">
									<svg viewBox="0 0 100 100" class="w-5 mr-2 fill-menuIcon -mt-px">
										<ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
									</svg><a href="#" class="cms-typo text-base text-cmsLightGreen">Nâng cấp</a>
								</li>
								<li class="inline-flex items-center mr-8">
									<svg viewBox="0 0 100 100" class="w-5 mr-2 fill-menuIcon -mt-px">
										<ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
									</svg><a href="#" class="cms-typo text-base text-cmsLightGreen">Sửa giao diện</a>
								</li> -->
							</ul>

							<div class="w-full relative">
								
								<img src="https://picsum.photos/430/150" class="w-full my-10px">
							</div>

							<div class="lg:flex flex-auto items-center md:gap-y-2 sm:gap-y-2 grid">
								<div class="cms-label flex flex-auto items-center text-14px text-labelAndTitle">
									<label class="cms-typo text-base text-cmsLightGreen">
										<svg viewBox="0 0 100 100" class="w-5 mr-2 fill-menuIcon -mt-px inline">
											<ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
										</svg>15 đơn hàng mới</label>
								</div>
								<div class="flex relative whitespace-no-wrap lg:ml-auto">
									<div class="cms-button-wrapper">
									<a 
									:href="'http://'+domain.domainName+'/admin' " target="blank"
									class="text-center inline-block bg-cmsDarkGreen group text-white text-base hover:bg-cmsLightGreen rounded-sm px-5 py-2 relative"> 
									Vào trang quản trị </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				

				<div class="lg:col-span-2 md:col-span-3 sm:col-span-6">
					<div class="grid-box group">
						<NuxtLink to="/user/create-shop">
							<div class="flex items-center justify-center bg-white h-150px max-h-150px">
								<div class="px-5">
									<svg viewBox="0 0 20.14 20.83" class="w-4 mb-10px mx-auto fill-cmsLightGreen hover:fill-cmsDarkGreen">
										<polygon id="_" data-name="+" points="11.57 20.83 11.57 11.8 20.14 11.8 20.14 8.97 11.57 8.97 11.57 0 8.53 0 8.53 8.97 0 8.97 0 11.8 8.53 11.8 8.53 20.83 11.57 20.83" class="cls-1"></polygon>
									</svg><span class="cms-typo text-base text-cmsLightGreen">Tạo thêm website mới</span>
								</div>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>

		</div>
	</div>
</main>
</template>
<script>
export default {
    layout: 'blank',
	middleware: 'auth',
    data(){
        return {
           shops: []
        }
    },
	created() {
		this.getShop()
	},
    methods: {
        async getShop(){
			this.$axios.get('clients/get-shop')
                .then( response => {
                    this.shops = response.data.data.items
                })
                .catch( error => {
                    
                });
		}
    },
}
</script>