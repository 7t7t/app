<template>
  <div>
    <div class="spider">{{msg}}</div>
    <group>
      <x-input title="手机号码" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
      <x-input title="网页地址" name="email" v-model="url" placeholder="请输入网页地址" is-type="email"></x-input>
      <x-textarea title="爬取到的内容" v-model="htmlData"></x-textarea>
    </group>
    <x-button type="primary" @click="getSpider">getSpider</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, XTextarea } from 'vux'
import http from 'http'
// import cheerio from 'cheerio'

export default {
  name: 'spider',
  components: {
    XTextarea,
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      msg: 'spider',
      url: '',
      htmlData: '',
      maskValue: ''
    }
  },
  methods: {
    getSpider: function () {
      var postData = {
        a: '00'
      }
      var options = {
        hostname: 'http://news.southcn.com',
        port: 80,
        method: 'post',
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'zh-CN,zh;q=0.9',
          'Connection': 'keep-alive',
          'Content-Length': '0',
          'Cookie': 'PHPSESSID=iubap2i2boih4r15hgdrpbsss7; PHPSESSID_NS_Sig=oenCV6mfwHty_ha9; wdcid=63902b4f84aa6946; Hm_lvt_fcda14e8d9fc166be9cf6caef393ad0e=1512205981,1512208237; Hm_lpvt_fcda14e8d9fc166be9cf6caef393ad0e=1512208270; __asc=4ca0639616016a289bd94ab3c31; __auc=6b7d95d41601680268cd1d508e4',
          'Host': 'u.southcn.com',
          'Origin': 'http://news.southcn.com',
          'Referer': 'http://news.southcn.com/china/content/2017-12/01/content_179292813.htm',
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        }
      }
      var req = http.request(options, function (res) {
        res.on('data', function (data) {
          this.htmlData += data
        })
        res.on('error', function () {
          console.log(this.htmlData)
        })
        res.on('end', function () {
          // cheerio.load(this.htmlData)
          console.log('爬取内容出错！')
        })
      })

      req.on('error', function (e) {
        console.log('error:' + e.mssage)
      })
      req.write(postData)
      req.end()
    }
  }
}
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
