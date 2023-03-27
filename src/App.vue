<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:green ">
    
      <router-link to="/dashboard" class="navbar-brand py-2 text-white font-semibold hover:bg-indigo-900 px-2" style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 30px;"></router-link>
      <ul class="navbar-nav wrapper flex justify-between ">
        <li class="nav-item active nav-item text-white m-2 btn btn-success btn btn-hover">
          <router-link to="/dashboard" class="text-white m-2  btn btn-dark btn btn-hover">Dashboard</router-link>
          <router-link to="/login" class="text-white m-2  btn btn-info btn btn-hover">Login</router-link>
          <router-link to="/register" class=" text-white m-2 btn btn-warning btn btn-hover">Register</router-link>
          <button class=" text-white m-2 btn btn-primary m-2 btn btn-hover" @click="logoutUser()">Logout</button>
        </li>
      </ul>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mr-3 navbar-brand py-2 text-white font-semibold hover:bg-indigo-900 px-2" style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 30px;">
            <li class="nav-item">
              <a
                class="nav-link  text-white"
                href="#"
                id=""
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                Midterm Project
              </a>
              <!-- <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <router-link to="/login" class="dropdown-item">Login</router-link>
                <router-link to="/register" class="dropdown-item">Register</router-link>
                <li><hr class="dropdown-divider" /></li>
                <button class="dropdown-item" @click="logoutUser()">Logout</button>
              </ul> -->
            </li>
          </ul>
        </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </header>
</template>

<style scoped></style>

<script>
import { auth } from '@/firebase'

export default {
  data() {
    return {
      profilePic: '/images/Barz.jpg'
    }
  },
  methods: {
    logoutUser() {
      auth
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
