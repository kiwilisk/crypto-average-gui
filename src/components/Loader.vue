<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="six columns">
          <label for="assetIdOrName">Enter asset id or name</label>
        </div>
      </div>
      <div class="row">
        <div class="six columns">
          <input class="u-full-width" type="text" placeholder="e.g. bitcoin, btc..." id="assetIdOrName" v-model="assetIdOrName" v-on:keyup.enter="fetchAssetForId">
        </div>
        <div class="three columns">
          <button class="button-primary" type="button" v-on:click="fetchAssetForId">Fetch</button>
        </div>
      </div>
    </form>
    <div class="row">
      <div v-bind:class="warningClasses" v-if="showWarning">{{warningMessage}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { SET_ASSET, REMOVE_ASSET } from '../store//mutation-types';

export default {
  data() {
    return {
      warningMessage: '',
      showWarning: false,
      warningClasses: [],
      assetIdOrName: '',
    };
  },
  methods: {
    fetchAssetForId() {
      if (this.assetIdOrName) {
        axios.get(`http://localhost:5050/currencies/${this.assetIdOrName}`).then((response) => {
          this.warningClasses = ['six', 'columns', 'alert', 'alert-success'];
          this.warningMessage = 'Success';
          this.$store.commit(SET_ASSET, response.data);
        }, (error) => {
          this.warningClasses = ['six', 'columns', 'alert', 'alert-error'];
          this.warningMessage = 'Error. Could not retrieve asset';
          console.log(error);
          this.$store.commit(REMOVE_ASSET);
        });
        this.showWarning = true;
      } else {
        this.$store.commit(REMOVE_ASSET);
        this.showWarning = false;
      }
    },
  },
};
</script>
