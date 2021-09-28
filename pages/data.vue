<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-6 is-offset-3">
        <header class="is-size-3 mb-2">Data:</header>
        <table class="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>id</th>
              <th>text</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="id" v-for="{id, text} in data">
              <td>{{ id }}</td>
              <td>{{ text }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ( { $http }) {
    return $http.get('/api/data').then((response) => {
      return response.json()
    }).then((data) => ({ data }))
  }
}
</script>
