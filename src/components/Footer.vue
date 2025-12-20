<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© {{ year }} Demo Company. All rights reserved.</p>

      <nav class="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #111827; /* dark gray */
  color: #e5e7eb; /* light gray */
  padding: 1.5rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #ffffff;
}
</style>
