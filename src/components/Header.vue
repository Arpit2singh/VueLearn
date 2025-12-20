
<template>

<div id="HeaderBox">

    
        <div>
            <RouterLink to="/registration" class="nav-item">
                Registration
            </RouterLink>
        </div>
        <div><RouterLink to="/page2" class="nav-item">Page-2</RouterLink></div>
        <div><RouterLink to="/page3" class="nav-item">Page-3</RouterLink></div>
        <div><RouterLink to="/page4" class="nav-item">Page-4</RouterLink></div>
        <div><RouterLink to="/page5" class="nav-item">Page-5</RouterLink></div>

</div>

</template>

<script setup>

</script>

<style scoped>

/* #Header{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #252424aa;
    display: flex;
    justify-content: space-between;
    align-items: center;

} */
#HeaderBox{
    width: 100vw;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-size: 1rem;
    gap: 10px;
    padding: 1rem;
}
.nav-item {
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

.nav-item:hover {
  background-color: rgba(255,255,255,0.2);
  border-radius: 5px;
}

.router-link-active {
  border-bottom: 2px solid white;
}


</style>