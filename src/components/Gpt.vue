<script>
import axios from 'axios';

export default {
  data() {
    return {
      prompt: '',
      response: null
    };
  },
  methods: {
    async callChatGPT() {
      const apiURL = 'https://api.openai.com/v4/completions';
      const apiKey = '你的API密钥'; // 替换成你的API密钥
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      };
      const data = {
        model: "gpt-4", // 确保使用正确的模型
        prompt: this.prompt,
        max_tokens: 100
      };

      try {
        const response = await axios.post(apiURL, data, { headers });
        this.response = response.data.choices[0].text.trim();
      } catch (error) {
        console.error('请求ChatGPT API时发生错误：', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <textarea v-model="prompt" placeholder="输入你的提示..."></textarea>
    <button @click="callChatGPT">发送</button>
    <div v-if="response">
      响应: {{ response }}
    </div>
  </div>
</template>

<style scoped>

</style>