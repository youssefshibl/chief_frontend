<template>
  <div>
    <div class="nav-checkout">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <router-link
              to="/home"
              class="navbar-brand logo d-flex align-items-center"
              href="#"
            >
              <img src="@/assets/logo1.png" alt="" />
              <h4 class="text-secondary p-1">{{ $t("message.hello") }}</h4>
            </router-link>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div height="800px" class="stepper" id="stepper2">
      <div class="steps-container">
        <div class="steps">
          <div class="step" icon="fa fa-pencil-alt" id="1">
            <div class="step-title">
              <span class="step-number">01</span>
              <div class="step-text">Basic Information</div>
            </div>
          </div>
          <div class="step" icon="fa fa-info-circle" id="2">
            <div class="step-title">
              <span class="step-number">02</span>
              <div class="step-text">Personal Data</div>
            </div>
          </div>
          <div class="step" icon="fa fa-book-reader" id="3">
            <div class="step-title">
              <span class="step-number">03</span>
              <div class="step-text">Terms and Conditions</div>
            </div>
          </div>
          <div class="step" icon="fa fa-check" id="4">
            <div class="step-title">
              <span class="step-number">04</span>
              <div class="step-text">Finish</div>
            </div>
          </div>
        </div>
      </div>
      <div class="stepper-content-container">
        <div class="stepper-content fade-in" stepper-label="1">
          <div>Step 1</div>
        </div>
        <div class="stepper-content fade-in" stepper-label="2">
          <div>Step 2</div>
        </div>
        <div class="stepper-content fade-in" stepper-label="3">
          <div>Step 3</div>
        </div>
        <div class="stepper-content fade-in" stepper-label="4">
          <div>Step 4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-checkout {
  font-family: "Sansita", sans-serif;
}
.nav-checkout {
  background-color: #f8f9fa;
}
.logo img {
  width: 50px;
}
</style>
