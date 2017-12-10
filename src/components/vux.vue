<template>
  <div>
    <datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>
  </div>
</template>

<script>
import { DatetimeView, TransferDom } from 'vux'

export default {
  components: {
    DatetimeView
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      value1: '2017-10-11',
      showPopup: false,
      format: 'YYYY-MM-DD'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}
</style>
