<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
    <div class="max-w-3xl bg-white shadow-md rounded px-8 pt-6 pb-8 border border-green-600">
      <h2 class="font-bold text-3xl text-center mb-2">{{ name }}</h2>
      <h2 class="font-bold text-1xl text-center mb-2">{{ address }}</h2>
      <h2 class="font-bold text-1xl text-center mb-2">評価:{{ rating }}</h2>
      <a
        class="md:flex md:justify-center text-2xl font-bold text-blue-700 hover:text-blue-500"
        :href="url"
        >Google Mapで見る</a
      >
      <ul class="flex justify-around items-center my-8 mx-auto">
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/chair.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/spacious.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/instagram.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/unicorn.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/serenity.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/vibrant.svg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Starbucks',
  async asyncData({ params, $axios }) {
    const response = await $axios.$get('/.netlify/functions/place-by-id', {
      method: 'get',
      params: {
        place_id: params.id,
        fields: 'name,formatted_address,rating'
      }
    })
    return {
      name: response.result.name,
      address: response.result.formatted_address,
      rating: response.result.rating,
      url:
        'https://www.google.com/maps/search/?api=1&query=' +
        response.result.name +
        'query_place_id=' +
        params.id
    }
  }
}
</script>

<style scoped></style>
