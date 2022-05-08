<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin ? 'admin' : 'user'}}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="roleToggle(user.id)"
              v-if="user.id !== 1" 
            >
            <!-- 應該要是動態的，這邊先用 1 -->
              {{user.isAdmin ? 'set as user' : 'set as admin'}}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import AdminNav from './../components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  data(){
    return {
      users:[]
    }
  },
  components: {
    AdminNav
  },
  methods: {
    async fetchUser(){
      try {
        const { data, statusText } = await adminAPI.users.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.users = data.users
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得會員資料，請稍後再試'
        })
      }
    },
    async roleToggle({ userId, isAdmin }){
      try {
        const willBeAdmin = !isAdmin
        const { data, statusText } = await adminAPI.users.update({
          userId,
          isAdmin: willBeAdmin.toString()
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }
          return {
            ...user,
            isAdmin: willBeAdmin
          }
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法更新會員角色，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created(){
    this.fetchUser()
  },
}
</script>