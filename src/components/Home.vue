<template>
  <div>
    <pageHeader></pageHeader>
    <loader></loader>
    <assetDisplay></assetDisplay>
  </div>
</template>

<script>

import PageHeader from './PageHeader';
import Loader from './Loader';
import AssetDisplay from './AssetDisplay';

export default {
  name: 'app',
  components: {
    PageHeader,
    Loader,
    AssetDisplay,
  },
};
</script>
<style>

</style>
