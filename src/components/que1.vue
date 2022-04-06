<template>
    
<div>

    <br /><br /><br />

    <table align="center">

      <thead>

        <tr>

          <th>Index</th>

          <th>Name</th>

        </tr>

      </thead>

      <tbody>

        <tr v-for="user in users" :key="user.id">

          <td>{{ user.Index }}</td>

          <td>{{ user.Name }}</td>

        </tr>

     </tbody>

    </table>

  </div>

</template>

<script>

  export default {

    name: "que1",

    data() {

      return {

        users: [{

          Index: 0,

          Name: "AgileCRM"

        },

        {

          Index: 1,

          Name: "Mantra Technologies"

        },

        {

          Index: 2,

          Name: "500apps Python"

        },

        {

          Index: 3,

          Name: "500apps infinity"

        },],

      }

    },

    methods: {

    }

  }

</script>