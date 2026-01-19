<script setup lang="ts"></script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand text-white fw-bold" active-class="active">Furniture</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active text-white"
                aria-current="page"
                active-class="active fw-bold"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-white" active-class="active fw-bold">About</router-link>
            </li>
            <li class="nav-item dropdown text-white">
              <a
                class="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" 
                active-class="active fw-bold"
              >
                Service
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Menu 1</a></li>
                <li><a class="dropdown-item">Menu 2</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item">Other</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link text-white " active-class="active fw-bold" aria-disabled="true"
                >Contact</router-link
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
