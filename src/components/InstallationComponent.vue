<script lang="ts" scoped></script>
<template>
  <div class="installation">
    <div class="installation-info">
      <div class="installation-info--description">
        <h2>Wie es funktioniert – Nur 3 Klicks!</h2>
      </div>
    </div>
    <div class="installation-steps">
      <div class="installation-steps--block">
        <span>1</span>
        <h2>Sign up in seconds.</h2>
      </div>
      <div class="installation-steps--block">
        <span>2</span>
        <h2>Create or find a task that suits you.</h2>
      </div>
      <div class="installation-steps--block">
        <span>3</span>
        <h2>Connect with the right person – done!</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../styles/variables' as variables;

.installation {
  background-color: variables.$background-invert;
  padding: 80px 0;
  &-info {
    max-width: 50%;
    margin: 0 auto;
    text-align: center;
    color: variables.$text-invert;
    &--title {
      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 400;
      }
      margin-bottom: 1rem;
    }
    &--description {
      h2 {
        font-weight: 500;
        font-size: 3.3rem;
      }
    }
  }
  &-steps {
    display: flex;
    padding: 50px 30px;
    align-items: center;
    justify-content: space-evenly;
    &--block {
      height: 400px;
      width: 30%;
      border-radius: 30px;
      background-color: variables.$text-invert;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 20px;
      column-gap: 30px;
      span {
        font-size: 10rem;
        color: variables.$primary-color;
      }
      h2 {
        font-size: 2.2rem;
        width: 70%;
        color: variables.$background-invert;
      }
    }
  }
}

@media (max-width: 1200px) {
  .installation {
    &-steps {
      &--block {
        span {
          font-size: 9rem;
        }
        h2 {
          font-size: 1.9rem;
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .installation {
    &-steps {
      &--block {
        height: 350px;
        span {
          font-size: 8rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
}

@media (max-width: 950px) {
  .installation {
    &-steps {
      flex-direction: column;
      row-gap: 30px;
      &--block {
        width: 50%;
      }
    }
  }
}

@media (max-width: 740px) {
  .installation {
    &-info {
      &--description {
        h2 {
          font-weight: 500;
          font-size: 3rem;
        }
      }
    }
    &-steps {
      &--block {
        span {
          font-size: 5rem;
        }
        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media (max-width: 490px) {
  .installation {
    padding-bottom: 20px;
    &-info {
      max-width: 80%;
      &--description {
        width: 100%;
        text-align: center;

        h2 {
          font-weight: 500;
          font-size: 1.8rem;
        }
      }
    }
    &-steps {
      &--block {
        width: 80%;
        height: 250px;
        column-gap: 5px;
        span {
          font-size: 10rem;
        }
        h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
