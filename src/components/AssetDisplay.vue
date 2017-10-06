<template>
  <div class="container" v-if="asset">
    <div class="row">
      <div class="two columns">
        <strong>Id:</strong>
      </div>
      <div class="two columns">
        {{asset.id}}
      </div>
      <div class="two columns">
        <strong>Latest average:</strong>
      </div>
      <div class="two columns">
        {{asset.latestAverage}}$
      </div>
    </div>
    <div class="row">
      <div class="two columns">
        <strong>Name:</strong>
      </div>
      <div class="two columns">
        {{asset.name}}
      </div>
      <div class="two columns">
        <strong>Latest value:</strong>
      </div>
      <div class="two columns">
        {{asset.latestQuoteValue}}$
      </div>
    </div>
    <div class="row">
      <div class="two columns">
        <strong>Symbol:</strong>
      </div>
    <div class="two columns">
        {{asset.symbol}}
      </div>
    </div>
    <p></p>
    <div class="row">
      <div class="eight columns">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Updated At</th>
              <th>Average</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody v-for="quote in asset.quotes" :key="quote.updatedAt">
            <tr>
              <td>{{calculateDate(quote.updatedAt)}}</td>
              <td>{{quote.average}}$</td>
              <td>{{quote.value}}$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    calculateDate(utcSeconds) {
      const d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      return d.toISOString();
    },
  },
  computed: {
    asset() {
      return this.$store.state.asset;
    },
  },
};
</script>
